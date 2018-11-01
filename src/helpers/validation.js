const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePassword = password => password.length >= 6;

const isEmpty = string => string.length === 0;

export { validateEmail, validatePassword, isEmpty };
