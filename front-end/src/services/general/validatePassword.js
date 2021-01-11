export default function validatePassword(password) {
  const re = /^[\w]{6,}$/;
  return re.test(password);
}
