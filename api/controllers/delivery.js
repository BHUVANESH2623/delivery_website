import db from "../db.js";

export const GetDeliveryItems = (req, res) => {
  const q = "SELECT * FROM delivery";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const GetDeliveredItems = (req, res) => {};
