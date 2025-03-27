/**
 * 
 */

document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const feedbackText = document.getElementById('feedback-text');
    const submitButton = document.getElementById('submit-feedback');
    let rating = 0;

    // Star Rating Logic
    stars.forEach(star => {
        star.addEventListener('click', function () {
            rating = this.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            this.previousElementSibling && this.previousElementSibling.classList.add('active');
            this.nextElementSibling && this.nextElementSibling.classList.remove('active');
            checkSubmit();
        });
    });

    // Enable Submit Button
    feedbackText.addEventListener('input', checkSubmit);

    function checkSubmit() {
        if (rating > 0 && feedbackText.value.trim() !== "") {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', true);
        }
    }

    // Submit Button Click Event
    submitButton.addEventListener('click', function () {
        alert(`Feedback Submitted!\nRating: ${rating} stars\nComment: ${feedbackText.value}`);
        feedbackText.value = "";
        stars.forEach(s => s.classList.remove('active'));
        submitButton.setAttribute('disabled', true);
    });
});
