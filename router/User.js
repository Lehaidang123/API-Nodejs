const express = require("express");
const userRouter = express.Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
const passportConfig = require("../config/passport");
const User = require("../model/User");

// dangky
userRouter.post("/register", (req, res) => {
const { username, password, role } = req.body;
//kiem tra username co ton tai khong
User.findOne({ username }, (err, user) => {
if (err)
res.status(500).json({
message: { msgBody: "Error", msgError: true },
});
if (user)
res.status(400).json({
message: { msgBody: "Ten Dang Nhap Da Ton Tai", msgError: true },
});
else {
const newUser = new User({ username, password, role });
newUser.save((err) => {
if (err)
res.status(500).json({
message: { msgBody: "Error", msgError: true },
});
else
res.status(200).json({
message: { msgBody: "Tao Tai Khoan Thanh Cong", msgError: false },
});
});
}
});
});





// dangnhap
const signToken = (userID) => {
    return JWT.sign(
    {
        _iss: "lehaidang",
        get iss() {
            return this._iss;
        },
        set iss(value) {
            this._iss = value;
        },
    sub: userID,
    },
    "lehaidang",{ expiresIn: "1d" }
    );
    };
    userRouter.post(
    "/login",
    passport.authenticate("local", { session: false }),
    (req, res) => {
    if (req.isAuthenticated()) {
    const { _id, username, role } = req.user;
    const token = signToken(_id);
    res.cookie("access_token", token, { httpOnly: true, sameSite: true });
    res.status(200).json({
    isAuthenticated: true,
    user: { _id, username, role },
    });
    }
    }
    );


// đăng xuất

        userRouter.get(
            "/logout",
            passport.authenticate("jwt", { session: false }),
            (req, res) => {
            res.clearCookie("access_token");
            res.json({ user: { username: "", role: "" }, success: true });
            }
            );
            // kiểm tra đã đăng nhập hay chưa
            userRouter.get(
            "/authenticated",
            passport.authenticate("jwt", { session: false }),
            (req, res) => {
            const { _id, username, role } = req.user;
            res.status(200).json({
            isAuthenticated: true,
            user: {
            _id,
            username,
            role,
            },
            });
            }
            );





            userRouter.get("/getuser", (request, response) => {
                User.collection.find({}).toArray((error, result) => {
                    if(error) {
                        return response.status(500).send(error);
                    }
                    response.send(result);
                });
            });
        
module.exports = userRouter;