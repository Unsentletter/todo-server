/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// load tsconfig.json
const tsconfig = require('tsconfig');
const { config } = tsconfig.loadSync(__dirname);

module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-extended', './test/configure.ts'],
  testMatch: ['<rootDir>/src/**/*.(test|spec).(ts|js)'],
  testEnvironment: 'node',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(config.compilerOptions.paths, {
      prefix: '<rootDir>',
    }),
  },
};
