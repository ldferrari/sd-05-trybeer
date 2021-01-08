import validateLogin from './validateLogin';

const nameMinLenght = 12;

const validateRegister = (userData) => {
  const { name, email, password } = userData;
  // name validation
  const hasNumbers = /[0-9]/;
  // const onlyLetters = /[A-Za-z]/;
  const notEspecial = /^(?!\d+$)[a-zA-Z0-9\-,/-\s]*$/;
  const validNameInput = !hasNumbers.test(name) && notEspecial.test(name);
  const isValidName = validNameInput && name.length >= nameMinLenght;
  return validateLogin(email, password) && isValidName;
};

export default validateRegister;
