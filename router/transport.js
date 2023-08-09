const router = require("express").Router();
const Transport = require("../models/Transport.model");

router.post("/create", async (req, res) => {
  try {
    var transport = req.body;
    const newtransport = await new Transport(transport)
      .save()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.message);
      });
    return res.send(newtransport);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const alltransport = await Transport.find({})
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(alltransport);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatetransport = await Transport.updateMany(
      { _id: id },
      { $set: req.body }
    )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(updatetransport);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const transportremove = await Transport.remove({ _id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err.message;
      });
    return res.send(transportremove);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
