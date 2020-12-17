module.exports = {
  presets: [
    "@babel/preset-env",  // Responsible for change funcionalities that browser does not understand, as 'import', 'export', 'arrow functions', 'class', etc
    "@babel/preset-react" // Change things that browser don't understand from react, as JSX, and others specific funcionalities from react.
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};