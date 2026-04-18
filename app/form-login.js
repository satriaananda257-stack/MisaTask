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

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (password.value === "") {
    alert("password tidak boleh kosong");
  } else if (/[!#$%^&*]/.test(password.value)) {
    alert("password tidak boleh mengandung !#$%^&*");
  } else {
    window.location.href = "home.html"
  }
});