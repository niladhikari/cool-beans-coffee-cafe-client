import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import AuthProvider from "./Provider/AuthProvider";
import Users from "./Components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader:()=> fetch('https://cool-beans-coffee-cafe-server-lsp4sgzxy-hridoys-projects.vercel.app/coffee')
      },
      {
        path: "/addCoffees",
        element:<AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffees/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=> fetch(`https://cool-beans-coffee-cafe-server-lsp4sgzxy-hridoys-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>,
      },
      {
        path: "/signin",
        element:<SignIn></SignIn>,
      },
      {
        path: "/users",
        element:<Users></Users>,
        loader:()=> fetch('https://cool-beans-coffee-cafe-server-lsp4sgzxy-hridoys-projects.vercel.app/user')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
