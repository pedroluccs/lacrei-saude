import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',  
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
    '^.+\\.tsx?$': 'ts-jest',
},
    moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
},
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};

export default config;
