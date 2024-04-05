import React from "react";
import ProductList from "./features/product-list/ProductList";
import Navbar from "./features/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./features/auth/components/Login";
import SignUp from "./features/auth/components/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
