import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
});

const config ={
  clearmocks: true,
  testEnvironment: 'node',
};
export default createJestConfig(config);