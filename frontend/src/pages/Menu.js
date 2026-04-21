import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Menu = () => {
  usePageTitle("Menu");
  const [activeTab, setActiveTab] = useState("single");
  const [selected, setSelected] = useState("");
  const [hovered, setHovered] = useState("");
  const [selectedSub, setSelectedSub] = useState("");

  const menuItems = ["Testing", "Java", ".Net", "Database"];

  const subMenuItems = {
    Testing: ["Selenium", "Manual Testing", "DB Testing", "Unit Testing"],
    Java: ["Core Java", "Spring", "Hibernate"],
    ".Net": [".Net Core", "ASP.NET", "MVC"],
    Database: ["SQL", "MySQL", "MongoDB"]
  };

  return (
    <div style={styles.container}>
      
      <h2>Menu</h2>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={activeTab === "single" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("single")}
        >
          Single Menus
        </button>

        <button
          style={activeTab === "sub" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("sub")}
        >
          Sub Menus
        </button>
      </div>

      {/* Content Box */}
      <div style={styles.content}>

        {/* 🔹 SINGLE MENU */}
        {activeTab === "single" && (
          <div style={styles.flexRow}>
            
            {/* Left Menu */}
            <div style={styles.menuBox}>
              {menuItems.map((item) => (
                <div
                  key={item}
                  style={styles.menuItem}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Message */}
            <div style={styles.messageBox}>
              {selected && (
                <p>
                  You have selected <b>{selected}</b> Menu Option.
                </p>
              )}
            </div>

          </div>
        )}

        {/* 🔹 SUB MENU */}
        {activeTab === "sub" && (
          <div style={styles.flexRow}>
            
            {/* Left Menu */}
            <div style={styles.menuBox}>
              {menuItems.map((item) => (
                <div
                  key={item}
                  style={styles.menuItem}
                  onMouseEnter={() => {
                    setHovered(item);
                    setSelectedSub(""); // reset message when switching
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Sub Menu */}
            <div style={styles.menuBox}>
              {hovered &&
                subMenuItems[hovered].map((sub, index) => (
                  <div
                    key={index}
                    style={styles.menuItem}
                    onClick={() => setSelectedSub(sub)}
                  >
                    {sub}
                  </div>
                ))}
            </div>

            {/* Message */}
            <div style={styles.messageBox}>
              {selectedSub && (
                <p>
                  You have selected <b>{selectedSub}</b> Option.
                </p>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Menu;

const styles = {
  container: {
    padding: "20px",
    marginTop: "10px"
  },
  
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px"
  },
  tab: {
    padding: "10px 15px",
    border: "1px solid #ccc",
    background: "#eee",
    cursor: "pointer"
  },
  activeTab: {
    padding: "10px 15px",
    border: "1px solid #007bff",
    background: "#007bff",
    color: "white",
    cursor: "pointer"
  },
  content: {
    background: "white",
    padding: "20px",
    borderRadius: "5px"
  },
  flexRow: {
    display: "flex",
    gap: "20px"
  },
  menuBox: {
    width: "220px"
  },
  menuItem: {
    padding: "15px",
    background: "#3c8dbc",
    color: "white",
    marginBottom: "5px",
    textAlign: "center",
    cursor: "pointer"
  },
  messageBox: {
    flex: 1,
    padding: "20px",
    fontSize: "16px"
  }
};