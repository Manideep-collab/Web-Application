import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const CssProperties = () => {
  usePageTitle("CSS Properties");

  const [activeTab, setActiveTab] = useState("links");

  return (
    <div>

      <h2>Css Properties</h2>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button onClick={() => setActiveTab("links")} style={activeTab === "links" ? styles.activeTab : styles.tab}>Links</button>
        <button onClick={() => setActiveTab("labels")} style={activeTab === "labels" ? styles.activeTab : styles.tab}>Labels</button>
        <button onClick={() => setActiveTab("buttons")} style={activeTab === "buttons" ? styles.activeTab : styles.tab}>Buttons</button>
        <button onClick={() => setActiveTab("alerts")} style={activeTab === "alerts" ? styles.activeTab : styles.tab}>Alerts</button>
        <button onClick={() => setActiveTab("progress")} style={activeTab === "progress" ? styles.activeTab : styles.tab}>Progress Bars</button>
      </div>

      {/* Content Box */}
      <div style={styles.box}>

        {/* LINKS */}
        {activeTab === "links" && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="#" style={{ color: "red", margin: "10px" }}>Link 1</a>
            <a href="#" style={{ color: "blue", margin: "10px" }}>Link 2</a>
            <a href="#" style={{ color: "green", margin: "10px" }}>Link 3</a>
            <a href="#" style={{ color: "orange", margin: "10px" }}>Link 4</a>
            <a href="#" style={{ color: "purple", margin: "10px" }}>Link 5</a>
          </div>
        )}

        {/* LABELS */}
        {activeTab === "labels" && (
          <div style={styles.center}>
            <span style={styles.label("gray")}>Default</span>
            <span style={styles.label("blue")}>Primary</span>
            <span style={styles.label("green")}>Success</span>
            <span style={styles.label("orange")}>Warning</span>
            <span style={styles.label("red")}>Danger</span>
          </div>
        )}

        {/* BUTTONS */}
        {activeTab === "buttons" && (
          <div style={styles.center}>
            <button style={styles.btn("gray")}>Default</button>
            <button style={styles.btn("blue")}>Primary</button>
            <button style={styles.btn("green")}>Success</button>
            <button style={styles.btn("orange")}>Warning</button>
            <button style={styles.btn("red")}>Danger</button>
          </div>
        )}

        {/* ALERTS */}
        {activeTab === "alerts" && (
          <div>
            <div style={styles.alert("blue")}>This is a primary alert</div>
            <div style={styles.alert("green")}>This is a success alert</div>
            <div style={styles.alert("orange")}>This is a warning alert</div>
            <div style={styles.alert("red")}>This is a danger alert</div>
          </div>
        )}

        {/* PROGRESS */}
        {activeTab === "progress" && (
          <div>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: "30%", background: "blue" }}></div>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: "60%", background: "green" }}></div>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: "80%", background: "orange" }}></div>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: "95%", background: "red" }}></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CssProperties;

const styles = {
  tabs: {
    display: "flex",
    gap: "10px",
    marginTop: "20px"
  },
  tab: {
    padding: "10px 15px",
    background: "#eee",
    border: "none",
    cursor: "pointer"
  },
  activeTab: {
    padding: "10px 15px",
    background: "#3c8dbc",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  box: {
    background: "white",
    padding: "20px",
    marginTop: "10px",
    minHeight: "300px",
    borderRadius: "5px"
  },
  center: {
    textAlign: "center",
    marginTop: "40px"
  },

  label: (color) => ({
    background: color,
    color: "white",
    padding: "5px 10px",
    margin: "5px",
    display: "inline-block"
  }),

  btn: (color) => ({
    background: color,
    color: "white",
    border: "none",
    padding: "10px 15px",
    margin: "5px",
    cursor: "pointer"
  }),

  alert: (color) => ({
    background: color,
    color: "white",
    padding: "10px",
    margin: "10px 0"
  }),

  progressBar: {
    width: "100%",
    height: "20px",
    background: "#eee",
    margin: "15px 0"
  },
  progressFill: {
    height: "100%"
  }
};