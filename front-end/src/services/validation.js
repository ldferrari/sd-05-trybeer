const nameLength = 12;
const passwordLength = 7;

const validate = (email, password, name) => name.length > nameLength
  && name.match(/^[a-zA-Z\u00C0-\u00FF\s]+$/)
  && email.match(/\S+@\S+\.\S+/)
  && !(password.length < passwordLength);

export default validate;
