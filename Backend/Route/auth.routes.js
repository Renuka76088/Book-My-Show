const express = require("express")
const router = express.Router()
const { register, login, Forgotpassword, emailVerify, resetPassword, updatePassword,logout } = require("../Controller/authController")
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/forgot-password").post(Forgotpassword)
router.route("/verify").post(emailVerify)
router.route("/reset-password").get(resetPassword)
router.route("/update-password").post(updatePassword)
router.route("/logout").post(logout)

module.exports = router