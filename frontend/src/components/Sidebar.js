import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [openEmployee, setOpenEmployee] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="sidebar">

      <div className="logo">Magnus</div>

      <div className="user">
        <div className="avatar"></div>
        <div>
          <div className="name">Guest User</div>
          <div className="role">User</div>
        </div>
      </div>

      <ul className="menu">

        {/* Home */}
        <li onClick={() => navigate("/dashboard")}>
          🏠 Home
        </li>

        {/* Employee */}
        <li onClick={() => setOpenEmployee(!openEmployee)}>
          <span>👥 Employee</span>
          <span className={`arrow ${openEmployee ? "open" : ""}`}>▶</span>
        </li>

        {openEmployee && (
          <ul className="submenu">
            <li onClick={() => navigate("/dashboard/add-employee")}>
              Create
            </li>
            <li onClick={() => navigate("/dashboard/employees")}>
              Search
            </li>
          </ul>
        )}

        {/* More */}
        <li onClick={() => setOpenMore(!openMore)}>
          <span>📋 More</span>
          <span className={`arrow ${openMore ? "open" : ""}`}>▶</span>
        </li>

        {openMore && (
          <ul className="submenu">
            <li onClick={() => navigate("/dashboard/tabs")}>Multiple Tabs</li>
            <li onClick={() => navigate("/dashboard/menu")}>Menu</li>
            <li onClick={() => navigate("/dashboard/autocomplete")}>Autocomplete</li>
            <li onClick={() => navigate("/dashboard/collapse")}>Collapsible Content</li>
            <li onClick={() => navigate("/dashboard/images")}>Images</li>
            <li onClick={() => navigate("/dashboard/slider")}>Slider</li>
            <li onClick={() => navigate("/dashboard/tooltips")}>Tooltips</li>
            <li onClick={() => navigate("/dashboard/popups")}>Popups</li>
            <li onClick={() => navigate("/dashboard/links")}>Links</li>
            <li onClick={() => navigate("/dashboard/css")}>CSS Properties</li>
            <li onClick={() => navigate("/dashboard/iframes")}>iFrames</li>
          </ul>
        )}

        <li>⚙️ Settings</li>

      </ul>
    </div>
  );
};

export default Sidebar;