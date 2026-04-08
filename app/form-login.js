const password = document.getElementById("password");
const submit = document.getElementById("submit_toggle");

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.innerHTML = type === "password"
    ? feather.icons["eye-off"].toSvg()
    : feather.icons["eye"].toSvg();
});

submit.addEventListener("click", function () {
if (password.value != "!#$%^&*") {
    window.location.href = "home.html";
} else {
    alert("password tidak boleh !#$%^&*")
}
});