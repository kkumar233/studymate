import React from "react";
//import "../assets/css/style.css"; // Import CSS

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="overlay"></div>
      <div className="home-content">
        <h2>Unlock Your Potential with StudyMate</h2>
        <p>
          Organize your study materials and make learning stress-free.
          Upload, download, and access your notes anytime, anywhere!
        </p>
        <a href="#" id="open-signup" className="signup-button">Get Started</a>
      </div>
    </section>
  );
};

export default Home;
