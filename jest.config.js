module.exports = {
  globals: {
    __PATH_PREFIX__: ``,
  },
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script)/)`],
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
}
