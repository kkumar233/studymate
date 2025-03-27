import React from "react";
const Header = ({ openModal }) => {
  return (
    <div className="header">
    <div className="logo">StudyMate</div>
    <div className="nav-buttons">
        <a href="#home">Home</a>
        <a href="#upload">Upload</a>
        <a href="#download">Download</a>
        <a href="#about">About</a>
        <a href="#feedback">Feedback</a>   
        <a href="#" onClick={(e) => { e.preventDefault(); openModal("selectLoginType"); }}>Sign In</a> / 
        <a href="#" onClick={(e) => { e.preventDefault(); openModal("selectLoginType"); }}>Sign Up</a>
    </div>
</div>
  );
};

export default Header;
