import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.scss";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = async () => {
    await logout();
    <Navigate to={"/"} />;
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <h1>Tracker</h1>
        </div>
        <div className="right">
          <Link to={"/login"}>
            <span>Login</span>
          </Link>
          <Link to={"/register"}>
            <span>Register</span>
          </Link>
          <Link>
            <span onClick={handleLogout}>Logout</span>
          </Link>
          <Link to={"/inventory"}>
            <span>Products</span>
          </Link>
          {user?.role === "Inventory" && (
            <Link to={"/addproducts"}>
              <span>Add Products</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
