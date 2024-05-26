// script.js
document.addEventListener('DOMContentLoaded', () => {
    const warningModal = document.getElementById('nsfw-warning');
    const proceedButton = document.getElementById('proceed-button');
    const backButton = document.getElementById('back-button');

    // Display the modal
    warningModal.style.display = 'flex';

    // Handle the proceed button click
    proceedButton.addEventListener('click', () => {
        warningModal.style.display = 'none';
    });

    // Handle the back button click
    backButton.addEventListener('click', () => {
        window.history.back();
    });
});
