const apiBaseUrl = 'https://owilly.pythonanywhere.com/api/blog'; // Replace with your actual backend API URL

// Handle Login Form Submission
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${apiBaseUrl}/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Store both tokens in localStorage
            localStorage.setItem('authToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);
            console.log('Login Successful!');
            window.location.href = 'blog.html'; // Redirect to home page
        } else {
            const errorData = await response.json();
            console.log('Login Failed: ' + JSON.stringify(errorData));
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred while logging in.');
    }
});
