module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '@env': ['<rootDir>/src/environments/environment'],
    '@shared/(.*)': ['<rootDir>/src/app/shared/$1'],
    '@core/(.*)': ['<rootDir>/src/app/core/$1'],
    '@utils/(.*)': ['<rootDir>/src/app/utils/$1'],
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/cypress/',
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
};
