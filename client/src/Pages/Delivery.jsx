import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./delivery.scss";

export const Delivery = () => {
  const [items, setItems] = useState([]);
  const [reloadCounter, setReloadCounter] = useState(0);

  const handleDelivery = async (itemId) => {
    try {
      await axios.put(
        `https://delivery-website-backend.onrender.com/order/${itemId}`,
        {
          withCredentials: true,
        }
      );
      setReloadCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get(
          "https://delivery-website-backend.onrender.com/delivery/items",
          {
            withCredentials: true,
          }
        );
        // console.log(res.data);
        setItems(res.data);
      };

      fetch();
    } catch (err) {
      console.log(err);
    }
  }, [reloadCounter]);

  return (
    <div className="delivery">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>PRODUCT ITEM</th>
            <th>COUNT</th>
            <th>DELIVERY STATUS</th>
            <th>ORDER DATE</th>
            <th>ADDRESS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.itemname}</td>
              <td>{item.order_count}</td>
              <td>{item.delivery_status}</td>
              <td>{moment(item.orderdate).format("DD-MM-YYYY")}</td>
              <td>{item.address}</td>
              <td>
                <button
                  onClick={() => handleDelivery(item.id)}
                  className={
                    item.delivery_status === "success" ? "success" : "ordered"
                  }
                >
                  Delivered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
