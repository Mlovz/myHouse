const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;

    if (!phone) {
      res.status(400).json({ msg: "Phone filed is required!" });
    }

    const otp = await otpService.generateOtp();
    const ttl = 1000 * 60 * 2;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;

    const hash = hashService.hashOtp(data);

    res.json({
      hash: `${hash}.${expires}`,
      phone,
      otp,
    });
  }

  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All fields are required!" });
    }

    const [hashedOtp, expires] = hash.split(".");
    if (Date.now() > +expires) {
      res.status(400).json({ message: "OTP expired!" });
    }

    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOtp(hashedOtp, data);
    if (!isValid) {
      res.status(400).json({ message: "Invalid OTP" });
    }

    let user;

    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Db error" });
    }

    const { accessToken, refreshToken } = tokenService.generateToken({
      _id: user._id,
      activated: false,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    // const userDto = new UserDto(user);
    res.json({ accessToken, user });
  }
}

module.exports = new AuthController();
