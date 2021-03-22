module.exports = {
  "rootDir": "..",
  "preset": "ts-jest",
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  "collectCoverageFrom": [
    "**/*.{js,jsx,tsx,ts}",
    "!**/jest.config.js",
    "!**/*.{test,spec}.{js,jsx,tsx,ts}"
  ]
}
  