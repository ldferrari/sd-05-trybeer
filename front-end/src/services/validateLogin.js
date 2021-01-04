// Referência: https://regexr.com/3e48o

const validateLogin = (email, password) => {
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
  const validationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmailValid = validationRegex.test(String(email).toLowerCase());
  const isPasswordValid = String(password).length > 5;
  const isLoginValid = isEmailValid && isPasswordValid;

  return isLoginValid;
}

export default validateLogin;
