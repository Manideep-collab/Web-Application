import React, { useState, useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Links = () => {
  usePageTitle("Links");
  const [activeTab, setActiveTab] = useState("working");

  useEffect(() => {
    document.title = "Links";
  }, []);

  return (
    <div style={styles.container}>
      <h2>Links</h2>

      {/* Tabs */}
      <div style={styles.tabHeader}>
        <button
          style={activeTab === "working" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("working")}
        >
          Working Links
        </button>

        <button
          style={activeTab === "broken" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("broken")}
        >
          Broken Links
        </button>

        <button
          style={activeTab === "image" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("image")}
        >
          Image Links
        </button>

        <button
          style={activeTab === "status" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("status")}
        >
          Status Codes
        </button>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {activeTab === "working" && (
          <div style={styles.linksRow}>
            <a href="https://google.com" target="_blank" rel="noreferrer" style={{color:"red"}}>Link 1</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{color:"blue"}}>Link 2</a>
            <a href="https://openai.com" target="_blank" rel="noreferrer" style={{color:"green"}}>Link 3</a>
          </div>
        )}

        {activeTab === "broken" && (
          <div style={styles.linksRow}>
            <a href="/invalid-page" style={{color:"red"}}>Broken 1</a>
            <a href="/not-found" style={{color:"blue"}}>Broken 2</a>
            <a href="/error" style={{color:"green"}}>Broken 3</a>
          </div>
        )}

        {activeTab === "image" && (
          <div style={styles.linksRow}>
            <a href="https://via.placeholder.com/300" target="_blank" rel="noreferrer">Image 1</a>
            <a href="https://via.placeholder.com/400" target="_blank" rel="noreferrer">Image 2</a>
            <a href="https://via.placeholder.com/500" target="_blank" rel="noreferrer">Image 3</a>
          </div>
        )}

        {activeTab === "status" && (
          <div style={styles.linksRow}>
            <a href="https://httpstat.us/200" target="_blank" rel="noreferrer">200 OK</a>
            <a href="https://httpstat.us/404" target="_blank" rel="noreferrer">404 Not Found</a>
            <a href="https://httpstat.us/500" target="_blank" rel="noreferrer">500 Server Error</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;

const styles = {
  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "5px"
  },

  tabHeader: {
    display: "flex",
    borderBottom: "2px solid #ddd",
    marginBottom: "20px"
  },

  tab: {
    padding: "10px 15px",
    border: "none",
    background: "#f4f4f4",
    cursor: "pointer"
  },

  activeTab: {
    padding: "10px 15px",
    border: "none",
    background: "#3c8dbc",
    color: "white",
    cursor: "pointer"
  },

  content: {
    padding: "30px",
    border: "1px solid #ddd",
    background: "#fafafa"
  },

  linksRow: {
    display: "flex",
    gap: "30px",
    justifyContent: "center"
  }
};