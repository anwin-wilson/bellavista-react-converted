
// Demo mode - no authentication required
function logout(){
  localStorage.clear();
  window.location.href = "../../pages/auth/login.html";
}
