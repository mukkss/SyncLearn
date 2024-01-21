function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can perform client-side validation here if needed

    // Send a request to the server for authentication
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            // Redirect or perform other actions after successful login
        } else {
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function homeRed(){
    window.location.href="../Home/home.html"
}
