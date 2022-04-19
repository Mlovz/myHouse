const router = require("express").Router();
const authCtrl = require("../controllers/auth-controller");
const activateCtrl = require("../controllers/activate-controller");
const auth = require("../middleware/auth-middleware");

router.post("/api/send-otp", authCtrl.sendOtp);
router.post("/api/verify-otp", authCtrl.verifyOtp);
router.post("/api/activate", auth, activateCtrl.activate);

module.exports = router;
