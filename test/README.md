# Taiga automated testing
## Manually running the test suite
1. In MongoDB Compass, delete the `taiga-test` database if it exists.
2. Start the server in testing mode by executing `npm run start-server`.
3. Run the test suite by executing `npm test`.

## Automatically running the test suite
1. In MongoDB Compass, delete the `taiga-test` database if it exists.
2. Ensure that the server is not running.
3. Execute `npm run ci` to start the server, run all tests, and then shut down  the server.