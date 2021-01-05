export default function validateName(name) {
  const re = /^[a-z\s]{12,}$/i;
  return re.test(name);
}
