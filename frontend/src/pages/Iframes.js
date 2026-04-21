import React from "react";
import usePageTitle from "../hooks/usePageTitle";

const Iframes = () => {
  usePageTitle("iFrames");

  return (
    <div>

      <h2>iFrames</h2>

      {/* Tab Header */}
      <div style={styles.tabs}>
        <button style={styles.activeTab}>Iframes</button>
      </div>

      <div style={styles.box}>

        {/* Frame One */}
        <h3 style={styles.title}>Frame One</h3>
        <iframe
          title="frame1"
          style={styles.frame}
          srcDoc="<h2 style='text-align:center;margin-top:50px;'>This is Frame One</h2>"
        ></iframe>

        {/* Frame Two */}
        <h3 style={styles.title}>Frame Two</h3>
        <iframe
          title="frame2"
          style={styles.frame}
          src="/dashboard"
        ></iframe>

        {/* Frame Three */}
        <h3 style={styles.title}>Frame Three</h3>
        <iframe
          title="frame3"
          style={styles.frame}
          src="https://example.com"
        ></iframe>

      </div>
    </div>
  );
};

export default Iframes;

const styles = {
  tabs: {
    marginTop: "20px"
  },

    container: {
    padding: "20px",
    marginTop: "10px"
  },
  
  activeTab: {
    padding: "10px 20px",
    background: "#3c8dbc",
    color: "white",
    border: "none"
  },
  box: {
    background: "white",
    padding: "20px",
    marginTop: "10px",
    borderRadius: "5px"
  },
  title: {
    textAlign: "center",
    margin: "20px 0"
  },
  frame: {
    width: "100%",
    height: "300px",
    border: "1px solid #ccc",
    marginBottom: "30px"
  }
};