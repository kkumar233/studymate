import React from "react";
//import "./Footer.css"; // Import CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 StudyMate. All rights reserved.</p>
      <div className="footer-links">
        <a href="/login">Login</a> | 
        <a href="/signup">Sign Up</a> | 
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </footer>
  );
};

export default Footer;
