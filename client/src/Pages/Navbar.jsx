// Navbar.jsx

import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.scss";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {
  const { user, logout, project } = useContext(UserContext);

  const handleLogout = async () => {
    await logout();
    <Navigate to={"/"} />;
  };

  return (
    <div className="navbar">
      {project === true ? (
        <div className="container">
          <div className="left">
            <h1>Employee Management</h1>
          </div>
          <div className="right">
            <Link to={"/"}>
              <span>Home</span>
            </Link>
            {user && (
              <Link to={"/home"}>
                <span>View Employee</span>
              </Link>
            )}
            {user && (
              <Link to={"/employee"}>
                <span>Add New Employee</span>
              </Link>
            )}

            {user ? (
              <Link>
                <span onClick={handleLogout}>Logout</span>
              </Link>
            ) : (
              <>
                <Link to={"/login"}>
                  <span>Login</span>
                </Link>
                <Link to={"/register"}>
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="left">
            <h1>Delivery</h1>
          </div>
          <div className="right">
            <Link to={"/"}>
              <span>Home</span>
            </Link>
            {user && user.role === "User" && (
              <>
                <Link to={"/inventory"}>
                  <span>Products</span>
                </Link>
                <Link to={"/dashboard"}>
                  <span>Dashboard</span>
                </Link>
              </>
            )}
            {user && user.role === "Inventory" && (
              <>
                <Link to={"/inventory"}>
                  <span>Products</span>
                </Link>
                <Link to={"/addproducts"}>
                  <span>Add Products</span>
                </Link>
              </>
            )}
            {user && user.role === "Delivery" && (
              <Link to={"/delivery"}>
                <span>Deliver Products</span>
              </Link>
            )}
            {user ? (
              <Link>
                <span onClick={handleLogout}>Logout</span>
              </Link>
            ) : (
              <>
                <Link to={"/login"}>
                  <span>Login</span>
                </Link>
                <Link to={"/register"}>
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
