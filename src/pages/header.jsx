import React, { useState } from "react";

const Header = () => {
  const [activeModal, setActiveModal] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); 

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <>
      <div className="header">
        <div className="logo">StudyMate</div>
        {/* Hamburger Menu Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navbar Links */}
        <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#upload">Upload</a>
          <a href="#download">Download</a>
          <a href="#about">About</a>
          <a href="#feedback">Feedback</a>
          <a href="#" onClick={(e) => { e.preventDefault(); openModal("userType"); }}>Sign In</a> /
          <a href="#" onClick={(e) => { e.preventDefault(); openModal("signup"); }}>Sign Up</a>
        </div>
      </div>


      {/* User Type Selection Modal */}
      {activeModal === "userType" && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Select User Type</h2>
            <div className="user-type-modal">
              <button onClick={() => openModal("login")}>User Login</button>
              <button onClick={() => openModal("adminLogin")}>Admin Login</button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {activeModal === "signup" && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
            <p>Already have an account? <a href="#" onClick={() => openModal("login")}>Sign In</a></p>
          </div>
        </div>
      )}

      {/* User Login Modal */}
      {activeModal === "login" && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>User Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>           
            <a href="#" onClick={() => openModal("forgotPassword")}>Forgot Password?</a>
            <p>Don't have an account?<a href="#" onClick={() => openModal("signup")}>Sign Up</a></p>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
      {activeModal === "adminLogin" && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Admin Login</h2>
            <input type="email" placeholder="Admin Email" />
            <input type="password" placeholder="Admin Password" />
            <button>Login as Admin</button>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {activeModal === "forgotPassword" && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Reset Password</h2>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Send Reset Link</button>
            <p>Remembered your password? <a href="#" onClick={() => openModal("login")}>Sign In</a></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
