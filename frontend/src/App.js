import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Collapse from "./pages/Collapse";
import Tooltips from "./pages/Tooltips";
import Popups from "./pages/Popups";
import Autocomplete from "./pages/Autocomplete";
import Tabs from "./pages/Tabs";
import Images from "./pages/Images";
import Slider from "./pages/Slider";
import Links from "./pages/Links";
import CssProperties from "./pages/CssProperties";
import Iframes from "./pages/Iframes";
import AddEmployee from "./pages/Employees/AddEmployee";
import EmployeeList from "./pages/Employees/EmployeeList";

import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* Default Page */}
          <Route index element={<Home />} />

          {/* More Section */}
          <Route path="menu" element={<Menu />} />
          <Route path="collapse" element={<Collapse />} />
          <Route path="tooltips" element={<Tooltips />} />
          <Route path="popups" element={<Popups />} />
          <Route path="autocomplete" element={<Autocomplete />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="images" element={<Images />} />
          <Route path="slider" element={<Slider />} />
          <Route path="links" element={<Links />} />
          <Route path="css" element={<CssProperties />} />
          <Route path="iframes" element={<Iframes />} />

          {/* Employee Module */}
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="employees" element={<EmployeeList />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;