const loginValidation = (email, password) => {
  let emailValidation = false;
  let passwordValidation = false;

  if (email) {
    emailValidation = email.match(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    );
  }
  if (password) {
    passwordValidation = password.length > 6;
  }
  if (emailValidation && passwordValidation) return false;
  return true;
};

export default loginValidation;
