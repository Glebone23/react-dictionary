function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const validatePassword = password => password.length >= 6;

export { validateEmail, validatePassword };
