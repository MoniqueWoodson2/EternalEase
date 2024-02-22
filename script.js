// SignUpPage script
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save user information (for demonstration purposes, this is just an alert)
    alert("You are now ready to Login!");
});

// LoginPage script
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check username and password (for demonstration purposes, this is just an alert)
    if (username === "demo" && password === "demo") {
        alert("Login successful! Redirecting to Community Page...");
        // Redirect to Community Page
        window.location.href = "PostPage.html";
    } else {
        alert("Username and/or Password entered are NOT correct. Please Try Again!!");
    }
});
