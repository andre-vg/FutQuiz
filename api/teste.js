const express = require("express");
const router = express.Router();

router.get("/api/teste", (req, res) => {
  try {
    res.json({
      status: "200",
      message: "OK",
    });
  } catch (err) {
    res.json({
      status: "500",
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
