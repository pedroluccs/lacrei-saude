import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
},
    moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/$1',
},
    testMatch: ['**/tests/**/*.test.(ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
