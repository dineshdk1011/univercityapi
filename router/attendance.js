const router = require("express").Router();
const Attendance = require("../models/attendance");

router.post("/create", async (req, res) => {
  try {
    var attendance = req.body;
    const newattendance = await new Attendance(attendance)
      .save()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.message);
      });
    return res.send(newattendance);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allattendance = await Attendance.find({})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(allattendance);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const attendanceremove = await Attendance.remove({ _id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(attendanceremove);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
