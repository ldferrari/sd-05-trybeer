export const checkName = (nameTested) => {
  const regexName = /^[a-z\s]{12,}$/i;
  return regexName.test(nameTested);
};
export const checkEmail = (emailTested) => {
  const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  return regexEmail.test(emailTested);
};
export const checkPassword = (passwordTested) => {
  const notEnough = 5;
  if (passwordTested.length > notEnough) return true;
  return false;
};

// outros regexs criados pelo Jorge deste presente grupo 3:
// const regexName = /[a-z ]{12,30}/i;
// const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const regexPassword = /[a-zA-Z0-9@#$%&*]{6,30}/;

// [Honestidade Acadêmica]
// - regexName do aluno Pedro Calado, grupo 2
