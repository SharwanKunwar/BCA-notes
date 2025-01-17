function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "sharwan@123";
    const errorMessage = document.getElementById("error-message");
    const protectedContent = document.getElementById("protected-content");
    const passwordContainer = document.getElementById("password-container");

    if (passwordInput === correctPassword) {
        // Show the protected content
        protectedContent.style.display = "block";
        passwordContainer.style.display = "none";
    } else {
        // Display error message if password is incorrect
        errorMessage.style.display = "block";
    }
}

document.getElementById("protected-content").style.display = "none";