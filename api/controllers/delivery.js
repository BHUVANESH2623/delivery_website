import db from "../db.js";

export const GetDeliveryItems = (req, res) => {
  const q = `
    SELECT orders.*, users.name, inventory.itemname
    FROM orders
    JOIN users ON orders.user_id = users.id
    JOIN inventory ON orders.item_id = inventory.id
  `;

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const GetDeliveredItems = (req, res) => {};
