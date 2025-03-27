import React from "react";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to Study Material Organizer, your one-stop solution for managing and organizing all your learning resources efficiently. 
          We understand the challenges students, educators, and professionals face when handling multiple study materials. 
          That’s why we created this platform—to simplify your academic journey and enhance your learning experience.
        </p>
        <p>
          Our mission is to provide a seamless and structured way to store, categorize, and access study materials anytime, anywhere. 
          Whether you are preparing for exams, working on research projects, or organizing notes for future reference, our platform ensures you stay productive and focused.
        </p>
        <p>
          With advanced features like smart categorization, cloud storage, and quick retrieval, we make studying hassle-free. 
          Our team of experts continuously updates the platform with new tools and enhancements to improve usability and efficiency.
        </p>
        <p>
          At Study Material Organizer, we value your time and effort. 
          Our user-friendly interface allows you to upload, search, and organize documents effortlessly, saving you valuable hours spent searching for scattered resources.
        </p>
        <p>
          Join thousands of students and professionals who trust us to keep their study materials organized. 
          Empower your learning with Study Material Organizer—because knowledge is best utilized when it's well-organized! 🚀📚
        </p>

        {/* Our Team Section */}
      <h2>Our Team</h2>
      <div className="team-container">
        <div className="team-image img1"></div>
        <div className="team-image img2"></div>
        <div className="team-image img3"></div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
