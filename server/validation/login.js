const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateLoginInput = (data) => {
  let errors = {};
  // converts to empty string if empty, validator only works with strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // use validator to validate feilds and store in errors obj
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
