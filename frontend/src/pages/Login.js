import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const Login = () => {
  usePageTitle("Login");
  const navigate = useNavigate();

  const [email, setEmail] = useState("training@jalaacademy.com");
  const [password, setPassword] = useState("jobprogram");

  const handleLogin = () => {
    if (
      email === "training@jalaacademy.com" &&
      password === "jobprogram"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>

      {/* Heading */}
      <h1 style={styles.title}>JALA Academy</h1>
      <p style={styles.subText}>Use the below details to login</p>

      <p>Email : training@jalaacademy.com</p>
      <p>Password : jobprogram</p>

      <div style={styles.highlight}>
        Learn everything on Real-Time Scenarios. FREE for all.
      </div>

      {/* Login Card */}
      <div style={styles.card}>
        <h3 style={{ marginBottom: "20px" }}>Sign in</h3>

        {/* Email */}
        <div style={styles.inputBox}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <span style={styles.icon}>📧</span>
        </div>

        {/* Password */}
        <div style={styles.inputBox}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <span style={styles.icon}>🔒</span>
        </div>

        {/* Row */}
        <div style={styles.row}>
          <label>
            <input type="checkbox" /> Remember Me
          </label>

          <button style={styles.signInBtn} onClick={handleLogin}>
            Sign In
          </button>
        </div>

        <p style={{ margin: "10px 0" }}>- OR -</p>

        {/* Forgot Password */}
        <button
          style={styles.forgotBtn}
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password
        </button>

        <p style={styles.admin}>Admin Login</p>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’
        experience on Full Stack Development / Automation Testing / Dev-Ops /
        QA/ SDET/Cyber Security / RPA / Cloud Technologies. Training would be
        completely on live Project scenarios Read our website JALA Academy for
        more details : https://jalaacademy.com/
      </div>

    </div>
  );
};

export default Login;

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#eef1f5",
    minHeight: "100vh",
    paddingTop: "40px"
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold"
  },
  subText: {
    marginBottom: "10px"
  },
  highlight: {
    backgroundColor: "yellow",
    display: "inline-block",
    padding: "6px 12px",
    margin: "15px 0",
    fontWeight: "bold"
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
    border: "1px solid #ccc",
    outline: "none"
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
  signInBtn: {
    backgroundColor: "#3c8dbc",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer"
  },
  forgotBtn: {
    width: "100%",
    backgroundColor: "#3c5a99",
    color: "white",
    border: "none",
    padding: "10px",
    marginTop: "10px",
    cursor: "pointer"
  },
  admin: {
    marginTop: "10px",
    color: "#007bff",
    cursor: "pointer"
  },
  footer: {
    backgroundColor: "#3c8dbc",
    color: "white",
    padding: "15px",
    marginTop: "30px",
    fontSize: "14px"
  }
};