import React from "react";
import Menu from "./Menu";
import "../styles.css";
const Base = ({ className = "background text-white p-4", children }) => (
  <div>
    <Menu />
    <div className="container">
      <div className={className}>{children}</div>
    </div>
    <footer className="footer mt-auto py-3">
      <div className="container bg-success text-white text-center ">
        <h5>If you got any questions, feel free to reach out!</h5>
        <a href="/" className="btn btn-warning btn-lg">
          Contact Us
        </a>
      </div>
      <div className="container">
        <span className="text-dark">
          We got the best collections of outfits!!
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
