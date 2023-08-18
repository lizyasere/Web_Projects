// Access HTML Elements by their ID's using DOM
const form = document.getElementById("form"); // Get the form input element by its ID
const username = document.getElementById("username"); // Get the username input element by its ID
const email = document.getElementById("email"); // Get the email input element by its ID
const password = document.getElementById("password"); // Get the password input element by its ID
const password2 = document.getElementById("password2"); // Get the confirm password input element by its ID

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement; // Get the parent container of the input element
  formControl.className = "form-control error"; // Add the 'error' class to the container
  const small = formControl.querySelector("small"); // Find the <small> element within the container
  small.innerText = message; // Set the error message text
}

// Function to Show a success outline
function showSuccess(input) {
  const formControl = input.parentElement; // Get the parent container of the input element
  formControl.className = "form-control success"; // Add the 'success' class to the container
}

// Function to Check if email is Valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Regular expression pattern for email validation
  if (re.test(input.value.trim())) {
    // Test if the trimmed value of the email input matches the pattern
    showSuccess(input); // Show success outline
  } else {
    showError(input, "Email is not valid"); // Show error message
  }
}

// Function to Check if required fields are filled
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    const value = input.value.trim(); // Trim the input value to remove leading/trailing spaces
    if (value === "") {
      showError(input, `${getFieldName(input)} is required`); // Show error message for required field
    } else {
      showSuccess(input); // Show success outline
    }
  });
}

// Function to Check if Input Length is within a range
function checkLength(input, min, max) {
  const length = input.value.length; // Get the length of the input value
  if (length < min || length > max) {
    showError(
      input,
      `${getFieldName(input)} must be at between ${min} and ${max} characters`
    );
  } else {
    showSuccess(input); // Show success outline
  }
}

// Function to Check if Passwords Match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Function to get a formatted FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Add event listener to the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Call validation functions for each input
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPasswordsMatch(password, password2);
  checkEmail(email);
});
