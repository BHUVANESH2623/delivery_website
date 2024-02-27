import db from "../db.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const GetOrders = (req, res) => {
  const q = "SELECT * FROM orders";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const AddOrders = (req, res) => {
  const token = req.cookies?.accessToken;

  if (!token) return res.status(401).json("User not logged in");

  jwt.verify(token, "SecretKey", (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    const item_id = req.body.id;
    const order_count = req.body.count;
    const delivery_status = req.body.itemstatus;
    const address = req.body.address;
    const orderdate = moment(new Date()).format("YYYY-MM-DD");

    const q =
      "INSERT INTO orders(user_id,item_id,order_count,delivery_status,orderdate,address) values(?)";

    const value = [
      data.id,
      item_id,
      order_count,
      delivery_status,
      orderdate,
      address,
    ];

    db.query(q, [value], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order Placed!...");
    });
  });
};

export const GetUserOrder = (req, res) => {
  const token = req.cookies?.accessToken;
  // console.log(token);

  if (!token) return res.status(401).json("User not logged in");

  jwt.verify(token, "SecretKey", (err, data) => {
    if (err) {
      return res.status(409).json("Token get expired");
    }
    const q =
      "SELECT o.*,i.* FROM orders AS o JOIN inventory AS i ON o.item_id=i.id  WHERE user_id=?";

    const id = data.id;
    db.query(q, [id], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json(data);
    });
  });
};

export const UpdateOrder = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const q = `UPDATE orders SET delivery_status = ?,deliverydate = ?  WHERE id= ?`;
  const st = "success";
  const d = moment(new Date()).format("YYYY-MM-DD");
  db.query(q, [st, d, id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json("Order placed successfully");
  });
};
