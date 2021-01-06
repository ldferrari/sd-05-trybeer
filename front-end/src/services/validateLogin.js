// Referência: https://regexr.com/3e48o
const passLenght = 5;
const validateLogin = (email, password) => {
  const validationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmailValid = validationRegex.test(String(email).toLowerCase());
  const isPasswordValid = String(password).length > passLenght;
  const isLoginValid = isEmailValid && isPasswordValid;
  return isLoginValid;
};

// const isNameValid = isNameValid.length > 12

export default validateLogin;
