import jwt from "jsonwebtoken";

export const deliveryMiddle = (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (token === "undefined" || !token) {
    return res.status(401).json("User not logged in");
  }

  jwt.verify(token, "SecretKey", (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.role !== "Delivery") {
      return res.status(409).json("Your are not allowed to access this field");
    }

    next();
  });
};
