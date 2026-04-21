import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const ForgotPassword = () => {
  usePageTitle("Forgot Password");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert("Password reset link sent to " + email);
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Magnus</h1>

      <div style={styles.card}>
        <h3>Forgot Password</h3>

        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <span style={styles.icon}>📧</span>
        </div>

        <div style={styles.row}>
          <span style={styles.back} onClick={() => navigate("/")}>
            Back
          </span>

          <button style={styles.btn} onClick={handleSubmit}>
            Get Password
          </button>
        </div>
      </div>

    </div>
  );
};

export default ForgotPassword;

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#eef1f5",
    minHeight: "100vh",
    paddingTop: "60px"
  },
  title: {
    fontSize: "40px"
  },
  card: {
    width: "350px",
    margin: "20px auto",
    padding: "25px",
    backgroundColor: "#f7f7f7",
    borderRadius: "5px"
  },
  inputBox: {
    position: "relative",
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc"
  },
  icon: {
    position: "absolute",
    right: "10px",
    top: "10px"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  back: {
    color: "#007bff",
    cursor: "pointer"
  },
  btn: {
    backgroundColor: "#3c8dbc",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer"
  }
};