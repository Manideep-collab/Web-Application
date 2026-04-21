import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import "./Home.css";

const Home = () => {
  usePageTitle("Home");

  return (
    <div className="home-container">

      <h1 className="home-title">Welcome to JALA Academy</h1>

      <p className="home-subtitle">
        The world's best up-skilling academy
      </p>

      <p className="home-text">
        Do you want to learn Selenium/cucumber Automation completely with Practical Scenarios in 7 Days?
        Use this website to find all the scenarios at one place.
      </p>

      <p className="home-text">
        To understand or test RESTful APIs, use the JALA Academy FREE live APIs.
        Search on Google with the keyword "JALA Academy Postman APIs"
      </p>

      {/* Grey Box */}
      <div className="home-box">
        <p>
          You learn Everything by doing projects if you are very serious to get a software job in 90 days
          <span className="home-link"> http://jalatechnologies.com</span>
        </p>

        <p>
          Don't forget to read our website JALA Academy completely to know more opportunities
        </p>
      </div>

      {/* Yellow Highlight */}
      <div className="home-highlight">
        If you are a working professional, Up-skill with JALA Academy Job Guarantee Programs to keep your Job secure for 10 Years
      </div>

    </div>
  );
};

export default Home;