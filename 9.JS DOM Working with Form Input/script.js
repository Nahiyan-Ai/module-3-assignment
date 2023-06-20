document.getElementById('myForm').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    // error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Validate name
    var nameRegex = /^[A-Za-z]+$/;
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      event.preventDefault();
    } else if (!nameRegex.test(nameInput.value.trim())) {
      nameError.textContent = 'Name should contain only letters.';
      event.preventDefault();
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required.';
      event.preventDefault();
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Invalid email address.';
      event.preventDefault();
    }

    // Validate password
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Password is required.';
      event.preventDefault();
    } else if (!passwordRegex.test(passwordInput.value.trim())) {
      passwordError.textContent = 'Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.';
      event.preventDefault();
    }

    // Validate confirm password
    if (confirmPasswordInput.value.trim() === '') {
      confirmPasswordError.textContent = 'Confirm Password is required.';
      event.preventDefault();
    } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      event.preventDefault();
    }
  });