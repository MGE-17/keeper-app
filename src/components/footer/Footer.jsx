import React from "react";
import "./Footer.scss";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__content">Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
