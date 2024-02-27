import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.js";
import inventoryRoutes from "./routes/inventory.js";
import orderRoutes from "./routes/orders.js";
import deliveryRoutes from "./routes/delivery.js";
import employeeRoutes from "./routes/employee.js";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: [
      "https://delivery-website-frontend.onrender.com",
      "https://delivery-website-tau.vercel.app",
    ],
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/order", orderRoutes);
app.use("/delivery", deliveryRoutes);
app.use("/employee", employeeRoutes);

app.listen(8080, () => {
  console.log("server connnected");
});
