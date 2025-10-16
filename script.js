// DOM Elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');
const messageDiv = document.getElementById('message');

// Form switching functionality
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
    clearMessage();
    updateHeader('Sign Up', 'Create a new account to get started.');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
    clearMessage();
    updateHeader('Login', 'Welcome back! Please login to your account.');
});

// Update header content
function updateHeader(title, subtitle) {
    const header = document.querySelector('.auth-header');
    header.innerHTML = `
        <h1>StudyCast</h1>
        <p>${subtitle}</p>
    `;
}

// Show message function
function showMessage(message, type = 'success') {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        clearMessage();
    }, 5000);
}

// Clear message function
function clearMessage() {
    messageDiv.style.display = 'none';
    messageDiv.textContent = '';
    messageDiv.className = 'message';
}

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password strength
function validatePassword(password) {
    return password.length >= 6;
}

// Show loading state on button
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.textContent = 'Loading...';
    } else {
        button.disabled = false;
        button.textContent = button.id === 'loginForm' ? 'Login' : 'Sign Up';
    }
}

// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const submitButton = loginForm.querySelector('.auth-button');
    
    // Basic validation
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    setButtonLoading(submitButton, true);
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Login successful! Redirecting...', 'success');
            // Store user data and token in localStorage
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            // Redirect to dashboard or home page
            setTimeout(() => {
                window.location.href = '/dashboard.html';
            }, 2000);
        } else {
            showMessage(data.message || 'Login failed', 'error');
        }
    } catch (error) {
        console.error('Login error:', error);
        showMessage('Network error. Please try again.', 'error');
    } finally {
        setButtonLoading(submitButton, false);
    }
});

// Signup form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const submitButton = signupForm.querySelector('.auth-button');
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    if (!validatePassword(password)) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    setButtonLoading(submitButton, true);
    
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Account created successfully! Please login.', 'success');
            // Switch to login form
            setTimeout(() => {
                signupForm.style.display = 'none';
                loginForm.style.display = 'flex';
                updateHeader('Login', 'Welcome back! Please login to your account.');
                // Pre-fill email
                document.getElementById('loginEmail').value = email;
                clearMessage();
            }, 2000);
        } else {
            showMessage(data.message || 'Signup failed', 'error');
        }
    } catch (error) {
        console.error('Signup error:', error);
        showMessage('Network error. Please try again.', 'error');
    } finally {
        setButtonLoading(submitButton, false);
    }
});

// Clear forms when switching
showSignupLink.addEventListener('click', () => {
    loginForm.reset();
});

showLoginLink.addEventListener('click', () => {
    signupForm.reset();
});

// Add some visual feedback for form inputs
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
    });
});

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token) {
        showMessage('You are already logged in. Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = '/dashboard.html';
        }, 2000);
    }
});
