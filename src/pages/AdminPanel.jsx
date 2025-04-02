import React, { useState } from "react";
const AdminPanel = () => {
  // Sample Data (Can be fetched from API)
  const [studyMaterials, setStudyMaterials] = useState([
    { id: 1, title: "Math Notes", subject: "Mathematics" },
    { id: 2, title: "Physics Guide", subject: "Physics" },
  ]);

  const [users, setUsers] = useState([
    { id: 101, name: "Shivam", email: "skumar00@rku.ac.in" },
    { id: 102, name: "Karan", email: "kkumar233@rku.ac.in" },
  ]);

  const [feedbacks, setFeedbacks] = useState([
    { user: "Vivek", message: "Great platform!", rating: "⭐⭐⭐⭐" },
  ]);

  // Handlers for Deleting Items
  const handleDeleteMaterial = (id) => {
    setStudyMaterials(studyMaterials.filter((material) => material.id !== id));
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleDeleteFeedback = (user) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.user !== user));
  };

  return (
    <div>
      {/* HEADER */}
      <div className="admin-header">
        <h2>Admin Panel - StudyMate</h2>
        <a href="/" className="logout-btn">Logout</a>
      </div>

      {/* DASHBOARD */}
      <div className="admin-container">
        {/* Manage Study Materials */}
        <h3>Manage Study Materials</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studyMaterials.map((material) => (
              <tr key={material.id}>
                <td>{material.id}</td>
                <td>{material.title}</td>
                <td>{material.subject}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => handleDeleteMaterial(material.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Manage Users */}
        <h3>Manage Users</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Manage Feedback */}
        <h3>User Feedback</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Feedback</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.user}</td>
                <td>{feedback.message}</td>
                <td>{feedback.rating}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDeleteFeedback(feedback.user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AdminPanel;
