import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "./addproduct.scss";
import axios from "axios";

export const AddProduct = () => {
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState({
    itemname: "",
    type: "",
    stock: 0,
    expire: "",
  });

  if (user?.role !== "Inventory") {
    return <Navigate to={"/"} />;
  }

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://delivery-website-backend.onrender.com/inventory",
        product,
        {
          withCredentials: true,
        }
      );

      setProduct({ itemname: "", type: "", stock: 0, expire: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addproduct">
      <div className="container">
        <div className="box">
          <Card className="card" sx={{ maxWidth: 345 }}>
            <h1>Inventory Manager</h1>
            <div className="input">
              <InputLabel id="demo-simple-select-helper-label">
                Product Name
              </InputLabel>
              <TextField
                id="productname"
                placeholder="Eg:Bat"
                variant="outlined"
                size="small"
                name="itemname"
                value={product.itemname}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <InputLabel id="demo-simple-select-helper-label">
                Product Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={product.type}
                size="small"
                name="type"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"perishable"}>Perishable</MenuItem>
                <MenuItem value={"unperishable"}>Unperishable</MenuItem>
              </Select>
            </div>
            <div className="input">
              <InputLabel id="demo-simple-select-helper-label">
                Stock Count
              </InputLabel>
              <TextField
                id="productname"
                variant="outlined"
                type="Number"
                size="small"
                placeholder="Eg: 500"
                name="stock"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <InputLabel id="demo-simple-select-helper-label">
                Expire Date
              </InputLabel>
              <TextField
                id="productname"
                variant="outlined"
                size="small"
                type="Date"
                name="expire"
                value={product.expire}
                onChange={handleChange}
              />
            </div>

            <Button variant="contained" onClick={handleSubmit}>
              Add
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
