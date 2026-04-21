import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Tooltips = () => {
  usePageTitle("Tooltips");
  const [hoverText, setHoverText] = useState("");
  const [clickText, setClickText] = useState("");

  const handleMouseEnter = () => {
    setHoverText("You have not clicked the button yet, Please click it!");
  };

  const handleMouseLeave = () => {
    setHoverText("");
  };

  const handleClick = () => {
    setClickText("You clicked the tooltip 🎯");
  };

  return (
    <div style={styles.container}>
      <h2>Tooltips</h2>

      <div style={styles.box}>
        <button
          style={styles.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          Hover or Click Me
        </button>

        {hoverText && <div style={styles.tooltip}>{hoverText}</div>}
        {clickText && <div style={styles.clickMsg}>{clickText}</div>}
      </div>
    </div>
  );
};

export default Tooltips;

const styles = {
  container: {
    padding: "20px"
  },
  box: {
    marginTop: "20px"
  },
  button: {
    padding: "10px 20px",
    background: "#3c8dbc",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  tooltip: {
    marginTop: "10px",
    background: "black",
    color: "white",
    padding: "5px 10px",
    display: "inline-block"
  },
  clickMsg: {
    marginTop: "10px",
    color: "#3c8dbc",
    fontWeight: "bold"
  }
};