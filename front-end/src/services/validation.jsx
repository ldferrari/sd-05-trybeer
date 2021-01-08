// prettier-ignore
const validate = (email, password, name) =>
name.length > 12 &&
name.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/) &&
  email.match(/\S+@\S+\.\S+/) &&
  !(password.length < 6);

export { validate };
