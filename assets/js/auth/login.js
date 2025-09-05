document.addEventListener("DOMContentLoaded", function () {
  const DEMO_USERS = {
    'admin@bellavista.com': { password: 'demo123', role: 'admin', name: 'Main Admin' },
    'cardiff.admin@bellavista.com': { password: 'demo123', role: 'admin', name: 'Cardiff Admin', home: 'cardiff' },
    'barry.admin@bellavista.com': { password: 'demo123', role: 'admin', name: 'Barry Admin', home: 'barry' },
    'waverley.admin@bellavista.com': { password: 'demo123', role: 'admin', name: 'Waverley Admin', home: 'waverley' },
    'collegefields.admin@bellavista.com': { password: 'demo123', role: 'admin', name: 'College Fields Admin', home: 'college-fields' },
    'staff@bellavista.com': { password: 'demo123', role: 'staff', name: 'Staff Member' },
    'family@bellavista.com': { password: 'demo123', role: 'family', name: 'Family Member' },
    'resident@bellavista.com': { password: 'demo123', role: 'resident', name: 'John Smith' }
  };

  window.DEMO_USERS = DEMO_USERS;

  if (localStorage.getItem("isLoggedIn") === "true") {
    const userRole = localStorage.getItem("userRole");
    if (userRole === 'admin') {
      window.location.href = "../../pages/admin/admin-console.html";
    } else if (userRole === 'staff') {
      window.location.href = "../../pages/dashboards/staff-dashboard.html";
    } else if (userRole === 'family') {
      window.location.href = "../../pages/dashboards/user-dashboard.html";
    } else {
      window.location.href = "../../index.html";
    }
    return;
  }

  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailEl = document.getElementById("email");
    const passwordEl = document.getElementById("password");
    if (!emailEl || !passwordEl) return;
    
    const email = (emailEl.value || "").trim().toLowerCase();
    const password = (passwordEl.value || "").trim();

    const user = DEMO_USERS[email];
    
    let isValid = false;
    if (user && user.password === password) {
      isValid = true;
    }

    if (isValid) {
      localStorage.clear();
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("role", user.role);
      localStorage.setItem("userName", user.name);
      localStorage.setItem("userEmail", email);
      if (user.home) {
        localStorage.setItem("userHome", user.home);
      }

      showMessage('Login successful! Redirecting...', 'success');

      setTimeout(() => {
        if (user.role === 'admin') {
          window.location.href = "../../pages/admin/admin-console.html";
        } else if (user.role === 'staff') {
          window.location.href = "../../pages/dashboards/staff-dashboard.html";
        } else if (user.role === 'family') {
          window.location.href = "../../pages/dashboards/user-dashboard.html";
        } else {
          window.location.href = "../../index.html";
        }
      }, 1000);
    } else {
      showMessage("Invalid credentials. Please try again.", 'error');
    }
  });

  function showMessage(message, type) {
    const existingMsg = document.querySelector('.login-message');
    if (existingMsg) {
      existingMsg.remove();
    }

    const messageEl = document.createElement('div');
    messageEl.className = `login-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      text-align: center;
      ${type === 'success' ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'}
    `;

    form.insertAdjacentElement('afterend', messageEl);

    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.remove();
      }
    }, 3000);
  }
});