//
const signUpForm = document.getElementById('auth-form');
const loginForm = document.getElementById('login-form');
const resetForm = document.getElementById('reset-password-form');
const formTitle = document.getElementById('form-title');
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password-field');
const authContainer = document.getElementById('auth-container');

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('landing-overlay').classList.add('hidden');
    authContainer.classList.remove('hidden');
  }, 2000);
});

togglePassword.addEventListener('click', () => {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  togglePassword.classList.toggle('uil-eye');
  togglePassword.classList.toggle('uil-eye-slash');
});

function showLogin() {
  formTitle.innerText = 'Login';
  signUpForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  resetForm.classList.add('hidden');
}

function showReset() {
  formTitle.innerText = 'Reset Password';
  signUpForm.classList.add('hidden');
  loginForm.classList.add('hidden');
  resetForm.classList.remove('hidden');
}

signUpForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name-field').value.trim();
  const email = document.getElementById('email-field').value.trim();
  const password = passwordField.value.trim();

  if (!name || !email || !password) {
    alert('All fields are required.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Invalid email format.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters.');
    return;
  }

  localStorage.setItem('authEmail', email);
  localStorage.setItem('authPassword', password);
  alert('Signed up successfully. Please log in.');
  showLogin();
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const storedEmail = localStorage.getItem('authEmail');
  const storedPassword = localStorage.getItem('authPassword');

  if (!email || !password) {
    alert('Both fields are required.');
    return;
  }

  if (email === storedEmail && password === storedPassword) {
    alert('Login successful!');
    window.location.href = 'chat.html';
  } else {
    alert('Incorrect email or password.');
  }
});

resetForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('reset-email').value.trim();
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  alert('Password reset link has been sent to ' + email);
  showLogin();
});

