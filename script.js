document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");
    const tabProgress = document.getElementById("tab-progress");
  
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    const loginToggle = document.getElementById("login-toggle");
    const registerToggle = document.getElementById("register-toggle");
  
    const loginPassword = document.getElementById("login-password");
    const registerPassword = document.getElementById("register-password");
    const registerConfirmPassword = document.getElementById("register-confirm-password");
  
    const passwordStrengthMeter = document.getElementById("password-strength-meter");
    const passwordHint = document.getElementById("password-hint");
  
    const messageBox = document.getElementById("message");
  
    // Helper: Clear message
    function clearMessage() {
      messageBox.textContent = "";
      messageBox.style.color = "";
    }
  
    // Helper: Show message
    function showMessage(msg, color = "red") {
      messageBox.textContent = msg;
      messageBox.style.color = color;
    }
  
    // Tab switching function
    function switchTab(tab) {
      clearMessage();
      if (tab === "login") {
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        tabProgress.style.transform = "translateX(0%)";
  
        loginForm.style.transform = "translateX(0)";
        loginForm.style.opacity = "1";
        loginForm.style.pointerEvents = "auto";
  
        registerForm.style.transform = "translateX(100%)";
        registerForm.style.opacity = "0";
        registerForm.style.pointerEvents = "none";
      } else {
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
        tabProgress.style.transform = "translateX(100%)";
  
        registerForm.style.transform = "translateX(0)";
        registerForm.style.opacity = "1";
        registerForm.style.pointerEvents = "auto";
  
        loginForm.style.transform = "translateX(-100%)";
        loginForm.style.opacity = "0";
        loginForm.style.pointerEvents = "none";
      }
    }
  
    // Initialize tab
    switchTab("login");
  
    // Tab click events
    loginTab.addEventListener("click", () => switchTab("login"));
    registerTab.addEventListener("click", () => switchTab("register"));
  
    // Password toggle function
    function togglePasswordVisibility(toggleBtn, passwordInput) {
      toggleBtn.addEventListener("click", () => {
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          toggleBtn.querySelector("i").classList.remove("fa-eye");
          toggleBtn.querySelector("i").classList.add("fa-eye-slash");
        } else {
          passwordInput.type = "password";
          toggleBtn.querySelector("i").classList.remove("fa-eye-slash");
          toggleBtn.querySelector("i").classList.add("fa-eye");
        }
      });
    }
  
    togglePasswordVisibility(loginToggle, loginPassword);
    togglePasswordVisibility(registerToggle, registerPassword);
  
    // Password strength checker
    function checkPasswordStrength(password) {
      let strength = 0;
  
      if (password.length >= 6) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/\d/.test(password)) strength++;
      if (/[\W_]/.test(password)) strength++;
  
      return strength; // 0 to 5
    }
  
    // Update strength meter UI
    function updateStrengthMeter(strength) {
      const meter = passwordStrengthMeter;
      meter.style.width = (strength / 5) * 100 + "%";
  
      switch (strength) {
        case 0:
        case 1:
          meter.style.backgroundColor = "#ef4444"; // red
          passwordHint.textContent = "Very weak password";
          passwordHint.style.color = "#ef4444";
          break;
        case 2:
          meter.style.backgroundColor = "#f59e0b"; // orange
          passwordHint.textContent = "Weak password";
          passwordHint.style.color = "#f59e0b";
          break;
        case 3:
          meter.style.backgroundColor = "#eab308"; // yellow
          passwordHint.textContent = "Moderate password";
          passwordHint.style.color = "#eab308";
          break;
        case 4:
          meter.style.backgroundColor = "#22c55e"; // green
          passwordHint.textContent = "Strong password";
          passwordHint.style.color = "#22c55e";
          break;
        case 5:
          meter.style.backgroundColor = "#16a34a"; // dark green
          passwordHint.textContent = "Very strong password";
          passwordHint.style.color = "#16a34a";
          break;
      }
    }
  
    // Listen to password input on register form
    registerPassword.addEventListener("input", (e) => {
      const strength = checkPasswordStrength(e.target.value);
      updateStrengthMeter(strength);
    });
  
    // Login form submit
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearMessage();
  
      const email = document.getElementById("login-email").value.trim();
      const password = loginPassword.value;
  
      if (!email) {
        showMessage("Please enter your email.");
        return;
      }
      if (!validateEmail(email)) {
        showMessage("Please enter a valid email.");
        return;
      }
      if (!password) {
        showMessage("Please enter your password.");
        return;
      }
  
      // Simulate login success
      showMessage("Login successful!", "green");
      loginForm.reset();
    });
  
    // Register form submit
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearMessage();
  
      const name = document.getElementById("register-name").value.trim();
      const email = document.getElementById("register-email").value.trim();
      const password = registerPassword.value;
      const confirmPassword = registerConfirmPassword.value;
  
      if (!name) {
        showMessage("Please enter your full name.");
        return;
      }
      if (!email) {
        showMessage("Please enter your email.");
        return;
      }
      if (!validateEmail(email)) {
        showMessage("Please enter a valid email.");
        return;
      }
      if (!password) {
        showMessage("Please enter a password.");
        return;
      }
      if (password.length < 6) {
        showMessage("Password must be at least 6 characters.");
        return;
      }
      if (password !== confirmPassword) {
        showMessage("Passwords do not match.");
        return;
      }
  
      // Simulate registration success
      showMessage("Registration successful!", "green");
      registerForm.reset();
      updateStrengthMeter(0);
    });
  
    // Email validation helper
    function validateEmail(email) {
      // Simple regex for email validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    // Optional: Social login click handlers
    document.querySelectorAll(".social-icon").forEach(icon => {
      icon.addEventListener("click", () => {
        alert(`Social login with ${icon.classList[1]} is not implemented.`);
      });
    });
  });
  