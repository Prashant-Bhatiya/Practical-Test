import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
