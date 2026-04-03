const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const sumbit = document.getElementById("sumbit_toggle");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", function () {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.innerHTML = type === "password"
    ? feather.icons["eye-off"].toSvg()
    : feather.icons["eye"].toSvg();
});

toggleConfirmPassword.addEventListener("click", function () {
  const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);

  this.innerHTML = type === "password"
    ? feather.icons["eye-off"].toSvg()
    : feather.icons["eye"].toSvg();
});

sumbit.addEventListener("click", function () {
if (password.value === confirmPassword.value) {
    window.location.href = "login.html";
} else {
    alert("password tidak sesuai")
}
});