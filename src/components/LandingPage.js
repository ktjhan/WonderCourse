import React from "react";
import "./Landing.css";
import Navbar from "./Navbar";

const Landing = () => {
  const circleStyle = (color) => ({
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: color,
    position: "absolute",
    opacity: 0.8,
    filter: "blur(80px)",
  });

  return (
    <>
    <Navbar />
    <div className="landing-page">
      <div style={{ position: "relative", width: "260px", height: "100px" }}>
        <div style={{ ...circleStyle("#00FFE0"), top: "0", left: "0px" }}></div>
        <div
          style={{ ...circleStyle("#0500FF"), top: "0", left: "100px" }}
        ></div>
        <div
          style={{ ...circleStyle("#FF0D6A"), top: "0", left: "200px" }}
        ></div>
        <div className="landing-title">
            <h1>WonderCourse</h1>
            <p>Your journey to freedom, starts here</p>
            <a href="https://tjhankavin.typeform.com/to/YCLZ46Y7" className="cta-button">Get Started</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
