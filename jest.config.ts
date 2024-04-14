import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles: ['./jest.polyfils.js'],
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
}

export default config
