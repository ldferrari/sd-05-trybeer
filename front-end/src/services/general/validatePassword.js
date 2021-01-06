export default function validatePassword(password) {
  const re = /^[\d]{6,}$/;
  return re.test(password);
}
