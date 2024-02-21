import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./Pages/Navbar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Inventory } from "./Pages/Inventory";
import { AddProduct } from "./Pages/AddProduct";
import { Employee } from "./Pages/Employee";

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
          element: <Home />,
          path: "/",
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
