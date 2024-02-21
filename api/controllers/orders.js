import db from "../db.js";
import jwt from "jsonwebtoken";

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
    const { item_id, order_count, delivery_status, orderdate } = req.body;
    const q =
      "INSERT INTO orders(user_id,item_id,order_count,delivery_status,orderdate) values(?)";

    const value = [data.id, item_id, order_count, delivery_status, orderdate];

    db.query(q, [value], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order Placed!...");
    });
  });
};
