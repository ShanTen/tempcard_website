const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

let contactData = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.name = document.getElementById("name");
  fields.phoneNumber = document.getElementById("phoneNumber");
  fields.email = document.getElementById("email");
  fields.message = document.getElementById("message");
});

function contactSubmit() {}

function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}

function isNumber(num) {
  return num.length > 0 && !isNaN(num);
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function getName() {
  return document.querySelector('input[name="gender"]:checked');
}
