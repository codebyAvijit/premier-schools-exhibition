import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";

import Home from "../pages/Home/Home";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;