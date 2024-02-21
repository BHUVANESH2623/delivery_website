import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "./inventory.scss";

export const Inventory = () => {
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
    <div className="inventory">
      {items.map((item, index) => (
        <Box sx={{ minWidth: 325 }} key={index}>
          <Card variant="outlined" className="box">
            <React.Fragment>
              <CardContent>
                {/* <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.itemname}
                </Typography> */}
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
                <Button size="small">Order Now</Button>
              </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      ))}
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
