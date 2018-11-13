const config = {
  name: 'React Dictionary',
  serverURL: 'https://react-dictionary.herokuapp.com',
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
};

export default config;
