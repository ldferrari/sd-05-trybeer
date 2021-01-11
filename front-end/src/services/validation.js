const nameLength = 12;
const passwordLength = 6;

// prettier-ignore
const validate = (email, password, name) => name.length > nameLength
  && name.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)
  && email.match(/\S+@\S+\.\S+/)
  && !(password.length < passwordLength);

export default validate;
