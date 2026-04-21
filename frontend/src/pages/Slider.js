import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Slider = () => {
  usePageTitle("Slider");
  const [value, setValue] = useState(4);

  return (
    <div style={styles.container}>
      <h2>Slider</h2>

      <div style={styles.box}>
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={styles.slider}
        />

        <p>Current Slider Value: {value}</p>
      </div>
    </div>
  );
};

export default Slider;

const styles = {
  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "5px"
  },

  box: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd"
  },

  slider: {
    width: "100%"
  }
};