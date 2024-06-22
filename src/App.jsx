import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className="text" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text" to="/details">
              Details
            </Link>
          </li>
          <li>
            <Link className="text" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:itemId" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
