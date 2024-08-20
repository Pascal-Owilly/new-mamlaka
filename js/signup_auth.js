const apiBaseUrl = 'https://owilly.pythonanywhere.com/api/blog'; // Replace with your actual backend API URL

// Handle Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    try {
        const response = await fetch(`${apiBaseUrl}/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password, password2 })
        });

        if (response.ok) {
            console.log('Sign Up Successful! You can now log in.');
            window.location.href = 'login.html';
        } else {
            const errorData = await response.json();
            console.log('Sign Up Failed: ' + JSON.stringify(errorData));
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred while signing up.');
    }
});