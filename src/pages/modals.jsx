import React from "react";

const Modals = ({ modalType, closeModal, openModal }) => {
  return (
    <>
      {/* Select Login Type Modal */}
      {modalType === "selectLoginType" && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Select Login Type</h2>
            <button onClick={() => openModal("userLogin")}>User Login</button>
            <button onClick={() => openModal("adminLogin")}>Admin Login</button>
          </div>
        </div>
      )}

      {/* User Login Modal */}
      {modalType === "userLogin" && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>User Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
      {modalType === "adminLogin" && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Admin Login</h2>
            <input type="text" placeholder="Admin Username" />
            <input type="password" placeholder="Admin Password" />
            <button>Login</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
