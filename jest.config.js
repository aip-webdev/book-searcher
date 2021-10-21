module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['../../node_modules/(?!${node_modules/jest-runtime/build/})'],
  collectCoverageFrom: [
    "src/**/*.{tsx}"
  ],

  testMatch: [
    "**/__tests__/*.test.tsx"
  ],

  testURL: "http://localhost"
};
