import moment from "moment/moment.js";
import db from "../db.js";

export const GetItems = (req, res) => {
  const q = "SELECT * from inventory";
  db.query(q, [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const AddItems = (req, res) => {
  // need to add the protected route for the inventory manager
  const count = Number(req.body.stock);

  const q = "INSERT INTO inventory(itemname,type,expire,stock) values(?)";
  const value = [
    req.body.itemname,
    req.body.type,
    moment(req.body.expire).format("YYYY-MM-DD"),
    req.body.stock,
  ];

  db.query(q, [value], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Item added to inventory");
  });
};
