import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Products from "../pages/Products";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="kayit" element={<Register />} />
        <Route path="stok" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="alimlar" element={<Purchases />} />
            <Route path="satislar" element={<Sales />} />
            <Route path="firmalar" element={<Firms />} />
            <Route path="markalar" element={<Brands />} />
            <Route path="urunler" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
