const User = require("../Models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mailer = require("../Helpers/mailer")
const PasswordReset = require("../Models/PasswordReset")
const jwtSecret = "11234567890hjnkiguoplsva7h3bw52bw4n98n#^dmnd&w83$797&"
const rs = require("randomstring")

exports.register = async (req, res, next) => {
    try {
        const { firstname, surname, email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
                return res.status(400).json({
                        message: "email already Exist"
                    })
                }
                if (password.length < 6) {
                    return res.status(400).json({
                        message: "password less than 6 characters"
                    })
                }
                bcrypt.hash(password, 10).then(async (hash) => {
                    await User.create({
                        firstname,
                        surname,
                        email,
                        password: hash
                    })
                })
                .then(async (getUser) =>  {
                    const user = await User.findOne({ email })
                 console.log(user?._id)
             
                const msg = `Hi, ${firstname} please varify your email <a href="http://localhost:5173/verify?id=${user?._id}">verify</a>`
                mailer.SendMail(email, "Email Verification", msg)
                res.status(201).json({
                    message: "user created successfully",

                });
            })
            .catch((err) => res.status(400).json({
                message: "error while creation",
                error: err.message
            })
            )
    } catch (error) {
        res.status(400).json({
            message: "error occured",
            error: error.message
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter email and password"
        })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                message: "login not Successful",
                error: "User not found"

            })

        } else {
            if (user.status == 1) {
                bcrypt.compare(password, user.password)
                    .then(function (result) {
                        if (result) {
                            const maxAge = 3 * 60 * 60
                            const token = jwt.sign(
                                {
                                    id: user._id, email
                                },
                                jwtSecret

                            )
                            res.cookie("jwt", token, {
                                httponly: true,
                                expires: new Date(
                                    Date.now() + 1000 * 84600
                                )
                            })
                            res.status(200).json({
                                message: "Successfully login",
                                token: token,
                                userData: user
                            })
                        } else {
                            res.status(400).json({
                                message: "Login not successfully 123",
                                pass: password

                            })
                        }
                    })
            } else {
                res.status(400).json({
                    message: "Please verify your account",

                })
            }

        }
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            error: error.message
        })
    }
}

exports.Forgotpassword = async (req, res) => {
    try {
        const { email } = req.body;
        const getUser = await User.findOne({ email })
        if (!getUser) {
            return res.status(404).json({
                success: false,
                message: "Email not found"
            })
        } else {
            PasswordReset.deleteMany({ userId: getUser._id })
            const randomstring = rs.generate()
            await PasswordReset.create({
                userId: getUser._id,
                token: randomstring
            })
                .then((User) => {
                    const msg = `Hi ${getUser.firstname}
                please click to reset your password
                <a href="http://localhost:5173/Reset-password?token=${randomstring}">
                Reset password </a>`
                    mailer.SendMail(email, "Reset password", msg)
                    return res.status(200).json({
                        message: "password reset link sent to your mail successfully"
                    })
                }).catch((error) => {
                    return res.status(400).json({
                        message: "error",
                        error: error.message
                    })
                })
        }
    } catch (error) {
        return res.status(400).json({
            message: "error",
            error: error.message
        })
    }
}

exports.emailVerify = async (req, res) => {
    try {
        const getUser = await User.findOne({ _id: req.query.id })
        if (!getUser) {
            return res.status(404).json({
                status: false,
                message: "user not found"
            })
        } else {
            if (getUser.status == 1) {
                return res.status(400).json({
                    status: false,
                    message: "Email Already Verify"
                })
            } else {
                await User.updateOne({ _id: req?.query?.id }, { status: 1 })
                    .then((User) => {
                        return res.status(200).json({
                            message: "congrestulations! Email Verified successfully",
                            status:true
                        })
                    }).catch((error) => {
                        return res.status(400).json({
                            message: "verification error",
                            error: error.message,
                            status:false
                        })
                    })
            }
        }
    } catch (error) {
        return res.status(400).json({
            message: "verification error",
            error: error.message,
            status:false
        })
    }
}
exports.resetPassword = async (req, res) => {
    try {
        const token = req.query.token
        const getData = await PasswordReset.findOne({ token })

        if (!getData) {
            return res.status(400).json({
                status: false,
                message: "token not found",
                tokendata: token,
                data: getData.userId
            })
        } else {
            return res.status(200).json({
                status: true,
                message: "Token matched",
                userId: getData.userId
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "verification error",
            error: error.message
        })
    }
}
exports.updatePassword = async (req, res) => {
    try {
        const { userId, newPassword, confirmNewPassword } = req.body
        if (!userId) {
            return res.status(400).json({
                status: false,
                message: "UserID not found"
            })
        }
        const getUser = await User.findOne({ _id: userId })
        if (!getUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        if (confirmNewPassword.length < 6) {
            return res.status(400).json({ message: "Password less than 6 characters" });
        }
        if (newPassword != confirmNewPassword) {
            return res.status(484).json({
                success: false,
                message: "Password and confirm password does not match"
            })
        }
        bcrypt.hash(confirmNewPassword, 10).then(async (hash) => {
            await User.updateOne({ _id: userId }, {
                password: hash
            })
                .then((user) => {
                    res.status(200).json({
                        message: "Password Reset successfully",
                        user: userId
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        message: "Error in password update",
                        error: error.message,
                    })
                });
        });
    }
    catch (error) {
        return res.status(400).json({
            status: false,
            error: error.message
        })
    }
}
exports.logout = async (req, res) => {
    res.clearCookie("jwt", { httpOnly: true, path: "/", maxAge: 1 })
    console.log(res.cookie.jwt)
    res.status(200).json({
        success: true,
        message: "Logout successfully"
    })
}







