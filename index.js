const express = require("express");
const app = express();
const router = express.Router();

const path = __dirname + "/";
const port = 80;
console.log(path);

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.sendFile(path + "./src/index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(port, function () {
  console.log(`Listering on port ${port}...`);
});
