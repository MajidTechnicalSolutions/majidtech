const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegisterInput = (data) => {
  let errors = {};

  //covert all empty fields to empty string (validator only works with string)
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.name) ? data.name : "";

  // validate
  validator.isEmpty(data.username);
  validator.isEmail(data.email);
  validator.isEmpty(data.password);
  validator.isEmpty(data.password);
};
