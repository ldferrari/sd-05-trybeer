import validateLogin from './validateLogin';

const nameMinLenght = 12;

export const isValidName = (name) => {
  // name validation
  const hasNumbers = /[0-9]/;
  // const onlyLetters = /[A-Za-z]/;
  const notEspecial = /^(?!\d+$)[a-zA-Z0-9\-,/-\s]*$/;
  const validNameInput = !hasNumbers.test(name) && notEspecial.test(name);
  return validNameInput && name.length >= nameMinLenght;
};

export const validateRegister = (userData) => {
  const { name, email, password } = userData;
  return validateLogin(email, password) && isValidName(name);
};
