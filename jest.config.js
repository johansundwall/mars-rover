module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  collectCoverage: true,
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!**/*.d.ts",
    "!**/*.spec.ts",
    "!**/node_modules/**",
  ],
};
