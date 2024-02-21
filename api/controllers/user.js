import db from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const Login = (req, res) => {
  const q = "SELECT * FROM users WHERE email=? AND role=?";
  db.query(q, [req.body.email, req.body.role], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) {
      return res.status(409).json("User not found");
    }

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(401).json("Wrong username or password");

    const token = jwt.sign({ id: data[0].id, role: data[0].role }, "SecretKey");
    const { password, ...others } = data[0];

    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json(others);
  });
};

export const Register = (req, res) => {
  const q = "SELECT * FROM users WHERE email=? AND role=?";
  db.query(q, [req.body?.email, req.body?.role], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length !== 0) {
      return res.status(409).json("user already present");
    }

    const p = "INSERT INTO users(name,email,role,password) VALUES (?)";

    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(req.body.password, salt);

    const value = [req.body.name, req.body.email, req.body.role, hashpassword];

    db.query(p, [value], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User registered successfully");
    });
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User Logged Out successfully");
};
