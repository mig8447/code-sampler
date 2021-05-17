module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      "\\.(css|less|scss|sass)$": "<rootDir>/src/tests/mock/styleMock.js"
    },
    moduleNameMapper: {
      "languageIndex": "<rootDir>/src/tests/mock/searchMock/language-index.js",
      "topTags": "<rootDir>/src/tests/mock/searchMock/topTags-index.js",
      "tagsIndex" : "<rootDir>/src/tests/mock/searchMock/tags-index.js"
    }
  };