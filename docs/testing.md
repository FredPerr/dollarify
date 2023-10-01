# Testing


## Unit
Jest is the test runner and will only run the `*.spec.ts` files in each package/library for the unit tests.

## Integration
Integration tests are ran using Jest and only run the `*.test.ts` files in each package/library.

Integration testing may require the use of Docker to spin up services such as a database.

## End-to-end (E2E)
E2E tests are stored as `.spec.ts` or `test.ts` files in the `tests/e2e/` folder at the root any package/library.

E2E testing may required you to mock the external services such as a database.
