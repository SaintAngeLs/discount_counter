module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  collectCoverage: true, 
  coverageDirectory: 'coverage', 
  coverageReporters: ['text', 'lcov'], 
  coverageThreshold: { 
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
