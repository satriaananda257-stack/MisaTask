const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");

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

submit.addEventListener("click", function () {
if (password.value === confirmPassword.value) {
    window.location.href = "home.html";}
else if (password.value === "" ||  confirmPassword.value === "") {
    alert("password tidak boleh kosong")
} else {
    alert("password tidak sesuai")
}
});