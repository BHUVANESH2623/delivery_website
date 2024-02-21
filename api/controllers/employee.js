import db from "../db.js";

export const GetEmployee = (req, res) => {
  const q = "SELECT * FROM emp";
  db.query(q, [], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const AddEmployee = (req, res) => {
  const q =
    "INSERT INTO emp(name,empid,department,designation,gender,salary,address,email,phone) values(?)";

  const value = [
    req.body.name,
    req.body.empid,
    req.body.department,
    req.body.designation,
    req.body.gender,
    req.body.salary,
    req.body.address,
    req.body.email,
    req.body.phone,
  ];

  db.query(q, [value], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("User Added Successfully");
  });
};
