const express = require("express");
const app = express();
const teste = require("../api/teste");

const PORT = process.env.PORT || 5000;

app.use("/", teste);

app.listen(PORT, () => {
  console.log(`️‍ 🔥 Server started at ${PORT}`);
});
