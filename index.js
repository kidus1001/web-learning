document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector(".InputEmail");
    const getStartedBtn = document.querySelector(".GetStarted");

    getStartedBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        alert(`Thank you for signing up with ${email}!`);
        emailInput.value = ""; // Clear the input field after success
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Adding button animation when clicked
    getStartedBtn.addEventListener("mousedown", function () {
        getStartedBtn.style.transform = "scale(0.95)";
    });

    getStartedBtn.addEventListener("mouseup", function () {
        getStartedBtn.style.transform = "scale(1)";
    });

    getStartedBtn.addEventListener("mouseleave", function () {
        getStartedBtn.style.transform = "scale(1)";
    });
});

