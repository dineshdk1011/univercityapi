const router = require("express").Router();
const Assessment = require("../models/assessment");

router.post("/create", async (req, res) => {
  try {
    var assessment = req.body;
    const newassessment = await new Assessment(assessment)
      .save()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.message);
      });
    return res.send(newassessment);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allassessment = await Assessment.find({})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(allassessment);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const assessmentremove = await Assessment.remove({ _id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(assessmentremove);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
