import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const login = async ({ name, email, role, password }) => {
    const res = await axios.post(
      "http://localhost:8080/user/login",
      { name, email, role, password },
      {
        withCredentials: true,
      }
    );
    setUser(res.data);
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:8080/user/logout");
      // localStorage.removeItem("currentUser");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      <UserContext.Provider value={{ login, user, logout }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};
