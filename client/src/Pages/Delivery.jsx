import React, { useEffect, useState } from "react";
import axios from "axios";

export const Delivery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get("http://localhost:8080/inventory/");
        console.log(res.data);
        setItems(res.data);
      };

      fetch();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="delivery">
      {items.map((item, index) => (
        <h3 key={index}>{item.itemname}</h3>
      ))}
    </div>
  );
};
