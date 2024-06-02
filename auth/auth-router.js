const express = require("express");
const authRouter = require("../controllers/controller");
const validate = require("../middleware/auth-middleware");
const {signUpSchema, logInSchema} = require("../validator/auth-validator");

const router = express.Router();

router.route("/").get(authRouter.home);
router.route("/register").post(validate(signUpSchema), authRouter.register);
router.route("/login").post(validate(logInSchema), authRouter.login);

module.exports = router;
