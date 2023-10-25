import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Profile from "./routes/Profile"
import Sign from "./routes/Sign";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./routes/ProductPage";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/Products' element={<ProductPage />} />
        <Route path='/Login' element={<Sign />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
