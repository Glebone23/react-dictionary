const config = {
  name: 'React Dictionary',
  // serverURL: 'https://react-dictionary.herokuapp.com',
  serverURL: 'http://localhost:8080',
  screens: {
    mobile: 443,
  },
  colors: {
    bgGray: '#fafafa',
    borderGray: '#ababab',
    themeFont: '#9d9d9d',
    mainDarkFontColor: '#505050',
    accentColor: '#53c1f6',
    mainLightColor: 'white',
  },
  errors: {
    500: 'Sorry something went wrong. Try again later!',
    409: 'An account for the specified email address already exists. Try another email address.',
    401: 'Incorrect email or password',
  },
  pages: {
    home: {
      title: 'Home',
      pathname: '/',
    },
    login: {
      title: 'Login',
      pathname: '/login',
    },
    signup: {
      title: 'Sign Up',
      pathname: '/signup',
    },
  },
};

export default config;
