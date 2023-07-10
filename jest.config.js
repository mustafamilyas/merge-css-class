module.exports = {
  transform: {
    "\\.js$": ["babel-jest", { configFile: "./babel.test.config.js" }],
  },
};
