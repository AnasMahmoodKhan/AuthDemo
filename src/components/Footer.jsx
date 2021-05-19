import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "#212529",
          color: "white",
        }}
      >
        © 2021 Copyright:
        <span className="text-reset fw-bold mx-2">Dashboard Designs</span>
      </div>
    </footer>
  );
};

export default Footer;
