import React from "react";
import usePageTitle from "../hooks/usePageTitle";

const Popups = () => {
  usePageTitle("Popups");

  // Row 1 → Open new tabs
  const openPopup = (url) => {
    window.open(url, "_blank");
  };

  // Row 2 → Duplicate / window popup
  const duplicatePage = () => {
    window.open(window.location.href, "_blank");
  };

  const openSmallWindow = () => {
    window.open(
      "https://example.com",
      "popup",
      "width=400,height=400"
    );
  };

  // Row 3 → Alerts
  const showAlert = () => {
    alert("This is an alert box!");
  };

  const showConfirm = () => {
    const result = window.confirm("Do you want to continue?");
    alert(result ? "You clicked OK" : "You clicked Cancel");
  };

  const showPrompt = () => {
    const name = window.prompt("Enter your name:");
    if (name) {
      alert(`Hello, ${name}!`);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Popups</h2>

      <div style={styles.box}>

        {/* Row 1 */}
        <div style={styles.row}>
          <button style={styles.btn} onClick={() => openPopup("https://google.com")}>Popup One</button>
          <button style={styles.btn} onClick={() => openPopup("https://github.com")}>Popup Two</button>
          <button style={styles.btn} onClick={() => openPopup("https://stackoverflow.com")}>Popup Three</button>
        </div>

        {/* Row 2 */}
        <div style={styles.row}>
          <button style={styles.btn} onClick={duplicatePage}>Popup Duplicate</button>
          <button style={styles.btn} onClick={duplicatePage}>Duplicate Tab</button>
          <button style={styles.btn} onClick={openSmallWindow}>In Window Popup</button>
        </div>

        {/* Row 3 */}
        <div style={styles.row}>
          <button style={styles.btn} onClick={showAlert}>Alert Box</button>
          <button style={styles.btn} onClick={showConfirm}>Confirm Box</button>
          <button style={styles.btn} onClick={showPrompt}>Prompt Box</button>
        </div>

      </div>
    </div>
  );
};

export default Popups;

const styles = {
  container: {
    padding: "20px",
    marginTop: "10px"
  },
  
  box: {
    background: "white",
    padding: "30px",
    marginTop: "20px"
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px"
  },
  btn: {
    background: "#3c8dbc",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    width: "150px"
  }
};