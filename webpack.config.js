const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Extract arguments (i.e. mode) passed into the webpack CLI, like: webpack --mode development
const {
  argv: { mode },
} = require('yargs');

// Just a separate file with common options for the html-webpack-plugin.
const config = require('./config');

module.exports = {
  // Can be 'development' or 'production'. Production mode runs minification etc.
  mode,

  // Start bundling from the main entry point of the application.
  entry: './src/index.jsx',
  output: {
    // Generate output into the 'dist' folder.
    path: path.resolve(__dirname, 'dist'),

    // Bundled (and probably minified) JavaScript file of the application.
    filename: 'index.js',

    // Url under which the application will be osted in production.
    // This is required by Webpack to resolve other files like images, fonts etc.,
    // which will load into the browser separately from index.js or index.html.
    publicPath: '/',
  },
  resolve: {
    // Find modules in node_modules or 'src' folders.
    // We can use import statements relatively to 'src' folder avoiding import paths like '../../../<component>'.
    modules: ['node_modules', './src'],

    // In the import statements resolve specified extensions automatically,
    // so we do not need to imports like: import Button from 'components/Button.jsx'
    extensions: ['.js', '.jsx', '.json'],

    // See the 'directory-named-webpack-plugin' in the package.json description.
    plugins: [new DirectoryNamedWebpackPlugin(true)],
  },
  plugins: [
    // See the 'html-webpack-plugin' in the package.json description.
    new HtmlWebpackPlugin(config),

    // See the 'manifest-webpack-plugin' in the package.json description.
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),

    // See the 'clean-webpack-plugin' in the package.json description.
    new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [
      {
        // Pass js and jsx files through Babel.
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        // Pass asset files through file-loader, so they will be just loaded by browser.
        test: /\.(eot|otf|svg|ttf|woff|png)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'assets/[name][hash].[ext]' },
        },
      },
    ],
  },
  // For 'production' mode do not use dev tools.
  // For 'development' mode generate sourcemaps for debugging and browsing source ES6 code.
  devtool: mode === 'production' ? false : 'cheap-module-source-map',

  // This is browser application, so we do not need to polyfill node,js stuff in browser.
  node: false,

  // This section is used by the 'webpack-dev-server'.
  // See the 'webpack-dev-server' in the package.json description.
  devServer: {
    // We will not use static files, so we do not need this option.
    contentBase: false,

    // Allow the index.html to handle 404 errors, so our React Router will handle unknown urls.
    historyApiFallback: true,

    // Host running application on localhost
    // AND make it available externally, i.e. on testing mobile devices in your internal network.
    // host: '127.0.0.1',

    // The application will be available on port 1000.
    port: 8000,
  },
};
