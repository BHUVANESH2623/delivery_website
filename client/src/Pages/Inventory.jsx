import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { TextField } from "@mui/material";
import "./inventory.scss";

export const Inventory = () => {
  const [items, setItems] = useState([]);
  const [orderBool, setOrderBool] = useState(1);
  const [orderItem, setOrderItem] = useState({});
  const [count, setCount] = useState(0);
  const [address, setAddress] = useState("");
  const itemstatus = "ordered";

  useEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get(
          "https://delivery-website-backend.onrender.com/inventory/",
          { withCredentials: true }
        );
        console.log(res.data);
        setItems(res.data);
      };

      fetch();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const handleOrder = (item) => {
    setOrderItem(item);
    setOrderBool(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = orderItem.id;
      await axios.post(
        "https://delivery-website-backend.onrender.com/order/",
        { id, count, address, itemstatus },
        { withCredentials: true }
      );

      alert("Order placed successfully");
      setOrderBool(1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="inventory">
      {items.map((item, index) => (
        <Box sx={{ minWidth: 325 }} key={index}>
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
                  In Stock : {item.stock}
                  <br />
                </Typography>
                <Typography variant="body2">
                  Expires On : {moment(item.expire).format("DD-MM-YYYY")}
                  {/* <br /> */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOrder(item)}>
                  Order Now
                </Button>
              </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      ))}

      {orderBool !== 1 && (
        <div className="handleorderitem">
          <Card className="ordercard" sx={{ maxWidth: 345 }}>
            {orderBool === 2 && (
              <React.Fragment>
                <div className="close">
                  <button onClick={() => setOrderBool(1)}>X</button>
                </div>
                <CardContent>
                  <Typography variant="h4" component="div" color={"slateblue"}>
                    {orderItem.itemname}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Type : {orderItem.type}
                  </Typography>
                  <Typography variant="body2">
                    In Stock : {orderItem.stock}
                    <br />
                  </Typography>
                  <Typography variant="body2">
                    Expires On : {moment(orderItem.expire).format("DD-MM-YYYY")}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => setOrderBool(3)} variant="contained">
                    Continue
                  </Button>
                </CardActions>
              </React.Fragment>
            )}

            {orderBool === 3 && (
              <React.Fragment>
                <div className="close">
                  <button onClick={() => setOrderBool(1)}>X</button>
                </div>
                <CardContent className="iptfield" sx={{ maxWidth: 345 }}>
                  <TextField
                    className="ipt"
                    size="small"
                    type="number"
                    variant="outlined"
                    placeholder="Count Eg: 1"
                    onChange={(e) => setCount(e.target.value)}
                  ></TextField>
                  <textarea
                    name="address"
                    className="iptarea"
                    cols="20"
                    rows="5"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address to Deliver"
                  ></textarea>
                </CardContent>
                <CardActions>
                  <Button variant="contained" onClick={handleSubmit}>
                    Place Order!
                  </Button>
                </CardActions>
              </React.Fragment>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// const card = (

// );

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>

//     </Box>
//   );
// }
