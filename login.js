const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
let nr = 0;

submit.disabled = true;

function validateEmail() {
  if (!email.value.includes("@gmail") && !email.value.includes("@yahoo")) {
    email.style.borderColor = "red";
    p = email.parentElement.lastElementChild;
    p.style.color = "red";
    p.textContent = "Email must contain @gmail or @yahoo";
    return false;
  } else {
    email.style.borderColor = "gray";
    p = email.parentElement.lastElementChild;
    p.textContent = "Email address validated";
    p.style.color = "rgb(98, 136, 22)";
    return true;
  }
}

function validatePassword() {
  if (nr) {
    let ok = 0;
    let specChars = "1234567890@#$%^&*";
    for (let i = 0; i < 17; i++)
      if (password.value.includes(specChars[i])) ok = 1;
    if (password.value.length < 8 || !ok) {
      password.style.borderColor = "red";
      p = password.parentElement.lastElementChild;
      p.style.color = "red";
      p.textContent =
        "Password must must have at least 8 character and contain special characters (1234567890@#$%^&*)";
      return false;
    } else {
      password.style.borderColor = "gray";
      p = password.parentElement.lastElementChild;
      p.textContent = "Password validated";
      p.style.color = "rgb(98, 136, 22)";
      return true;
    }
  }
}

email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);

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
  console.log("You pressed submit button");
});
