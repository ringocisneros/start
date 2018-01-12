/* * 
 * Utility script to start the server locally and open
 * the app in the default browser.
 * 
 * It expects "--port" as argument to define which port to start the
 * server. If it is not provided, 
*/

const getPortFromArgv = require('./lib/parsers').getPortFromArgv;
const executeCommandAsync = require('./lib/process').executeCommandAsync;
const opn = require('opn');

const PORT = getPortFromArgv() || process.env.PORT;

if (PORT == null) {
	console.error("Port number not found in the environment variables...\n");
	console.error("Please provide a Valid port number using the argument '--port='\n");
	process.exit(1);
} else {
	executeCommandAsync("node", ["./dist/_server.bundle.js", '--port=' + PORT]);
	opn('http://localhost:' + PORT);
}