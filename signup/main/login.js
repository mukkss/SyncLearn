container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showhidepw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye");
                })
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash")
                })
            }
        })
    });
});

signUp.addEventListener("click", function () {
    container.classList.add("active");
});

login.addEventListener("click", function () {
    container.classList.remove("active");
});

// Form validation
function loginvalidation() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Basic authentication check (replace this with server-side authentication)
    if (username === "mukesh1808@gmail.com" && password === "muk1234esh161102@") {
        alert("Login successful");
        window.location.href = "../Home/home.html";
    } else {
        alert("Invalid username or password");
    }
    return false;
}
function homeRed(){
    window.location.href="../Home/home.html"
}
