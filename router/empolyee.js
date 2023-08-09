const router = require("express").Router();
const Empolyee = require("../models/Empolyee.model");

router.post("/", async (req, res) => {
  try {
    var empolyee = req.body;
    const newempolyee = await new Empolyee(empolyee)
      .save()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(newempolyee);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allempolyee = await Empolyee.find({})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(allempolyee);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateuser = await Empolyee.updateMany(
      { _id: id },
      { $set: req.body }
    )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(updateuser);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const empolyeeremove = await Empolyee.remove({ _id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(empolyeeremove);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
