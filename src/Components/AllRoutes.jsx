import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../Pages/Cart";
import HomePage from "../Pages/HomePage";
import Product from "../Pages/Product";
import Products from "../Pages/Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/products/:id" element={<Product />} /> */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
