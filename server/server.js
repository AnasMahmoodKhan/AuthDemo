let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

const data_table = require("./TableDataReport");
const pie_data = require("./PieChartData.json");
let employees = require("./Employees.json");

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

app.get("/fetchemployees?", function (req, res) {
  res.send(employees);
});

app.post("/addemployee", function (req, res) {
  let id = req.body.id;

  let obj = employees.find((item) => item.id === id);
  if (obj === undefined) {
    const employee = {
      id: req.body.id,
      name: req.body.name,
      department: req.body.department,
      designation: req.body.designation,
      salary: req.body.salary,
      gender: req.body.gender,
    };
    employees.push(employee);
    res.send(employee);
  } else res.status(500).send("Employee with same ID already present");
});

app.get("/getemployee/:id", function (req, res) {
  let ind = req.params.id;
  let id = employees.findIndex((item) => item.id === ind);
  res.send(employees[id]);
});

app.put("/editemployee/:id", function (req, res) {
  let ind = req.params.id;
  let id = employees.findIndex((item) => item.id === ind);
  employees[id].id = req.body.id;
  employees[id].name = req.body.name;
  employees[id].department = req.body.department;
  employees[id].designation = req.body.designation;
  employees[id].salary = req.body.salary;
  employees[id].gender = req.body.gender;
  res.send(employees[id]);
});

app.delete("/deleteEmployee?", function (req, res) {
  let ind = req.query.ids;
  let employees_updated = employees.filter((item) => !ind.includes(item.id));

  employees = employees_updated;
  res.status(200).send("Employee details deleted successfully");
});
