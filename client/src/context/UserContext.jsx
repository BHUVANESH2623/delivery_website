import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const login = async ({ name, email, role, password }) => {
    try {
      const res = await axios.post(
        "https://delivery-website-backend.onrender.com/user/login",
        { name, email, role, password },
        {
          withCredentials: true,
        }
      );
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "https://delivery-website-backend.onrender.com/user/logout"
      );
      // localStorage.removeItem("currentUser");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  const [project, setProject] = useState(false);

  return (
    <div>
      <UserContext.Provider
        value={{ login, user, logout, project, setProject }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};
