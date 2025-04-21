function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Define the valid username and password
    var validUsername = "admin"; // Replace with your desired username
    var validPassword = "1234"; // Replace with your desired password

    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("personalDetails").style.display = "block";
    } else {
        alert("Invalid username or password!");
    }
}
