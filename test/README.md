# Taiga automated testing
## Manually running the test suite
1. Start the server in testing mode by executing `npm run start-server`.
2. Run the test suite by executing `npm test`.

## Automatically running the test suite
1. Ensure that the server is not running.
2. Execute `npm run ci` to start the server, run all tests, and then shut down  the server.