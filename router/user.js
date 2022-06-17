const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const secret = "4641316895";


router.post("/", async (req, res) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash;
        var user = req.body
        const newuser = await new User(user).save().then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(newuser)
    } catch (error) {
        return res.send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const alluser = await User.find({}).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(alluser)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        let passwordresult = await bcrypt.compare(
            req.body.password,
            user.password
        );
        console.log(passwordresult)
        if (passwordresult == true) {
            let token = jwt.sign({ userid: user._id }, secret, { expiresIn: "8h" });
            res.json({ token, user });
        } else {
            res.send("Wrong Password.. Please Check")
        }
    } else {
        res.send("User Not Found.. Please Check")
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const userremove = await User.remove({ "_id": id }).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(userremove)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router