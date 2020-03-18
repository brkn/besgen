module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  coverageDirectory: "<rootDir>/coverage",
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  /* setupFiles: ["<rootDir>/src/__mocks__/get-data.ts"] */
};
