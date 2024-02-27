import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { UserContext } from "../context/UserContext";
import "./dashboard.scss";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [viewOrders, setViewOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8080/order/userorder", {
          withCredentials: true,
        });
        setViewOrders(res.data);
        console.log(res.data); // Moved console.log here
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);
  // console.log(user);
  return (
    <div className="dashboard">
      <div className="profile">
        <div className="det1">
          <h1>Profile</h1>
          <span>edit</span>
        </div>
        <div className="det2">
          <div className="details">
            <h3>Username</h3>
            <span>{user?.name}</span>
          </div>
          <div className="details">
            <h3>Email</h3>
            <span>{user?.email}</span>
          </div>
          <div className="details">
            <h3>Role</h3>
            <span>{user?.role}</span>
          </div>
          <div className="details">
            <h3>Address</h3>
            <span>Chennai</span>
          </div>
        </div>
      </div>
      <div className="orderedproducts">
        {viewOrders.map((item, index) => (
          <Box className="box" sx={{ minWidth: 325 }} key={index}>
            <Card variant="outlined" className="box">
              <React.Fragment>
                <CardContent>
                  <Typography variant="h5" component="div" color={"slateblue"}>
                    {item.itemname}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Type : {item.type}
                  </Typography>
                  <Typography variant="body2">
                    Order Count: {item.order_count}
                    <br />
                  </Typography>
                  <Typography variant="body2">
                    Expires On : {moment(item.expire).format("DD-MM-YYYY")}
                  </Typography>
                  <Typography variant="body2">
                    Ordered On : {moment(item.orderdate).format("DD-MM-YYYY")}
                  </Typography>
                  <Typography variant="body2">
                    Delivered On :{" "}
                    {item.deliverydate === null
                      ? "Not disclosed"
                      : moment(item.deliverydate).format("DD-MM-YYYY")}
                  </Typography>
                  <Typography variant="body2">
                    Delivery Status : {item.delivery_status}
                    <br />
                  </Typography>
                  <Typography variant="body2">
                    Delivery Address : {item.address}
                    <br />
                  </Typography>
                </CardContent>
              </React.Fragment>
            </Card>
          </Box>
        ))}
      </div>
    </div>
  );
};
