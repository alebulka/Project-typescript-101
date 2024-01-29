// jest.config.js
export const preset = 'babel-jest';
export const testEnvironment = 'node';
export const transform = {
    '^.+\\.tsx?$': 'ts-jest/babel-transform',
};
  