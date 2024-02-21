import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const name = "Inventory Manager";
  const email = "inventory@gmail.com";
  const role = "Inventory";
  const password = "inventory";

  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    await login({ name, email, role, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
