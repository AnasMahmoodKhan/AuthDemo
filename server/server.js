let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const data_table = require("./TableDataReport");
const pie_data = require("./PieChartData.json");

const port = 2410;
app.listen(port, () => console.log(`listening to port ${port}`));

app.get("/fetchtabledata?", function (req, res) {
  res.send(data_table);
});

app.get("/fetchpiedata?", function (req, res) {
  let month = req.query.month;

  if (pie_data.find((item) => item.month === month)) {
    let data = pie_data.filter((item) => item.month === month);
    res.send(data);
  }
});
