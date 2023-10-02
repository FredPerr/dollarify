import type { Config } from 'jest'

const defaultTransform = {
    '^.+\\.ts?$': 'ts-jest'
}


const config: Config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    passWithNoTests: true,
    rootDir: './',
    transform: defaultTransform,
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '<rootDir>/libs/**/src/**/*.ts',
        '<rootDir>/apps/**/src/**/*.ts'
        // '!<rootDir>/apps/**/src/**/index.ts'
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    moduleFileExtensions: ['ts', 'js'],
    coverageReporters: ['json', 'lcov', 'html'],
    projects: [
        {
            displayName: "Finances Mathematics",
            testEnvironment: 'node',
            transform: defaultTransform,
            testMatch: [
                '<rootDir>/libs/finances/src/**/*.spec.ts',
                '<rootDir>/libs/finances/src/**/*.test.ts',
            ],
            testPathIgnorePatterns: ['<rootDir>/libs/finances/src/dist'],
        },
        // Other projects here
    ]

}

export default config

