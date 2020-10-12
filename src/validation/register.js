const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegisterInput = (data) => {
  // extenstiate errors obj
  let errors = {};

  //covert all empty fields to empty string (validator only works with string)
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.name) ? data.name : "";

  // validate fields and store in errors obj
  if (validator.isEmpty(data.username)) {
    errors.name = "Name field is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmation password field is required";
  }

  if (!validator.islength(data.password, { ming: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
