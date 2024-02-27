import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./Pages/Navbar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Inventory } from "./Pages/Inventory";
import { AddProduct } from "./Pages/AddProduct";
import { Employee } from "./Pages/Employee";
import { Dashboard } from "./Pages/Dashboard";
import DefaultHome from "./Pages/DefaultHome";
import { Delivery } from "./Pages/Delivery";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <DefaultHome />,
          path: "/",
        },
        {
          element: <Home />,
          path: "/home",
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/addproducts",
          element: <AddProduct />,
        },
        {
          path: "/employee",
          element: <Employee />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/delivery",
          element: <Delivery />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
