const router = require("express").Router();
const Assessment = require("../models/assessmentresult");

router.post("/create", async (req, res) => {
  try {
    var assessmentresult = req.body;
    const newassessmentresult = await new Assessment(assessmentresult)
      .save()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.message);
      });
    return res.send(newassessmentresult);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allassessmentresult = await Assessment.find({})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(allassessmentresult);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const assessmentresultremove = await Assessment.remove({ _id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(assessmentresultremove);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
