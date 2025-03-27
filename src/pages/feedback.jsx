import React, { useState } from "react";
//import "./Feedback.css"; // Import CSS for styling

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  // Handle user feedback input
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Handle star rating selection
  const handleStarClick = (value) => {
    setRating(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback || rating === 0) {
      alert("Please provide feedback and a star rating.");
      return;
    }
    alert(`Feedback Submitted: ${feedback} with Rating: ${rating} Stars`);
    setFeedback("");
    setRating(0);
  };

  return (
    <section id="feedback">
      <div className="feedback-container">
        <h2>Give Us Your Feedback</h2>

        {/* Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <span
              key={starValue}
              className={`star ${starValue <= rating ? "selected" : ""}`}
              onClick={() => handleStarClick(starValue)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Comment Box */}
        <textarea
          id="feedback-text"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>

        {/* Submit Button */}
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={!feedback || rating === 0}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Feedback;
