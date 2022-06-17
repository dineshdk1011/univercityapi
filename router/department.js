const router = require("express").Router()
const Student = require("../models/Department")


router.post("/create", async (req, res) => {
    try {
        var student = req.body
        const newstudent = await new Student(student).save().then((res) => { return res }).catch((err) => { console.log(err.message) })
        return res.send(newstudent)
    } catch (error) {
        return res.send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const allstudent = await Student.find({}).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(allstudent)
    } catch (error) {
        return res.status(500).send(error)
    }
})





router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const studentremove = await Student.remove({ "_id": id }).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(studentremove)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router