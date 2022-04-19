const tokenService = require("../services/token-service");

module.exports = async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return res.status(400).json({ msg: "Invalid token" });
    }

    const userData = await tokenService.verifyAccessToken(accessToken);

    if (!userData) throw new Error();

    req.user = userData;

    next();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
