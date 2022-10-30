import "./styles.css";

// select inputs of the form
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirmation");
const submitBtn = document.getElementById("submit-btn");

/**
 * display error message
 *
 * @param {object} inputObj input object that receives the error message
 * @param {string} errorMessage that is displayed
 */
const inputMessage = (inputObj, errorMessage) => {
  // set error message
  inputObj.setCustomValidity(errorMessage);
  // display error messsage
  inputObj.reportValidity();
};

/**
 *
 * @param {string} passwordValue choose password
 * @param {string} passwordConfirmValue repeat password
 * @returns boolean
 */
const confirmPassword = (passwordValue, passwordConfirmValue) => {
  // check if passwords match
  if (passwordValue === passwordConfirmValue) {
    return true;
  }
  return false;
};

email.addEventListener("input", () => {
  // typeMismatch is true when input is not in the required syntax (e.g. email
  // or url)
  if (email.validity.typeMismatch) {
    inputMessage(email, "Please enter a valid email address!");
  } else {
    // if input is in required syntax use empty string as argument
    // as long as the error message is not empty it will not be submitted
    email.setCustomValidity("");
  }
});

country.addEventListener("input", () => {
  if (country.validity.patternMismatch) {
    inputMessage(country, "Please use alphabetic characters!");
  } else {
    country.setCustomValidity("");
  }
});

zipCode.addEventListener("input", () => {
  if (zipCode.validity.patternMismatch) {
    inputMessage(zipCode, "Please enter 5 digits!");
  } else {
    zipCode.setCustomValidity("");
  }
});

password.addEventListener("input", () => {
  if (password.validity.patternMismatch) {
    inputMessage(
      password,
      "Requirements: 1 uppercase char, 1 lowercase char, 1 number, at least 8 char, 1 num"
    );
  } else {
    password.setCustomValidity("");
  }
});

passwordConfirm.addEventListener("input", () => {
  if (!confirmPassword(password.value, passwordConfirm.value)) {
    inputMessage(passwordConfirm, "Please repeat password!");
  } else {
    passwordConfirm.setCustomValidity("");
  }
});

submitBtn.addEventListener("click", (e) => {
  if (!email.validity.valid) {
    inputMessage(email, "Please enter a valid email address!");
    e.preventDefault();
  } else if (!country.validity.valid) {
    inputMessage(country, "Please use alphabetic characters!");
    e.preventDefault();
  } else if (!zipCode.validity.valid) {
    inputMessage(zipCode, "Please enter 5 digits!");
    e.preventDefault();
  } else if (!password.validity.valid) {
    inputMessage(
      password,
      "Requirements: 1 uppercase char, 1 lowercase char, 1 number, at least 8 char, 1 num"
    );
    e.preventDefault();
  } else if (!confirmPassword(password.value, passwordConfirm.value)) {
    inputMessage(passwordConfirm, "Please repeat password!");
    e.preventDefault();
  }
});
