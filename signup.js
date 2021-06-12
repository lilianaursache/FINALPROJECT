const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");

const icon = document.getElementById("icon");
let nr = 0;

submit.disabled = true;

function validateEmail() {
  if (!email.value.includes("@gmail") && !email.value.includes("@yahoo")) {
    email.style.borderColor = "red";
    let p = email.parentElement.lastElementChild;
    p.style.color = "red";
    p.textContent = "Email must contain @gmail or @yahoo";
    return false;
  } else {
    email.style.borderColor = "gray";
    let p = email.parentElement.lastElementChild;
    p.textContent = "Email address validated";
    p.style.color = "rgb(98, 136, 22)";
    return true;
  }
}

function validateFirstname() {
  let fn = firstname.value;
  for (let i = 0; i < fn.length; i++)
    if (
      (fn[i] < "A" || (fn[i] > "Z" && fn[i] < "a") || fn[i] > "z") &&
      fn[i] !== " "
    ) {
      console.log("gresit");
      firstname.style.borderColor = "red";
      let p = firstname.parentElement.lastElementChild;
      p.style.color = "red";
      p.textContent = "Firstname must contain only letters and space";
      return false;
    } else {
      console.log("corect");
      firstname.style.borderColor = "gray";
      let p = firstname.parentElement.lastElementChild;
      p.textContent = "Firstname validated";
      p.style.color = "rgb(98, 136, 22)";
      return true;
    }
}

function validateLastname() {
  for (let i = 0; i < lastname.length; i++)
    if (
      lastname[i] < "A" ||
      (lastname[i] > "Z" && lastname[i] < "a") ||
      lastname[i] > "z"
    )
      if (lastname[i] !== " ") return false;
  return true;
}

function validatePassword() {
  if (nr) {
    let ok = 0;
    let specChars = "1234567890@#$%^&*";
    for (let i = 0; i < 17; i++)
      if (password.value.includes(specChars[i])) ok = 1;
    if (password.value.length < 8 || !ok) {
      password.style.borderColor = "red";
      let p = password.parentElement.lastElementChild;
      p.style.color = "red";
      p.textContent =
        "Password must must have at least 8 character and contain special characters (1234567890@#$%^&*)";
      return false;
    } else {
      password.style.borderColor = "gray";
      let p = password.parentElement.lastElementChild;
      p.textContent = "Password validated";
      p.style.color = "rgb(98, 136, 22)";
      return true;
    }
  }
}

email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
firstname.addEventListener("blur", validateFirstname);
lastname.addEventListener("blur", validateLastname);

password.addEventListener("keydown", function () {
  nr++;
  let ok = 0;
  let specChars = "1234567890@#$%^&*";
  for (let i = 0; i < 17; i++)
    if (password.value.includes(specChars[i])) ok = 1;
  if (password.value.length < 8 || !ok || !validateEmail())
    submit.disabled = true;
  else submit.disabled = false;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("You pressed submit button");
});

icon.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    icon.src = "img/view.png";
    console.log(icon.style.src);
  } else {
    password.type = "password";
    icon.src = "img/private.png";
    console.log(icon.style.src);
  }
});
