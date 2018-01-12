/** 
 * Set of useful functions used in tooling scripts
 * to do basic parse and validation data from arguments o
 * or any other source
 */

function getPortFromArgv() {
	let port = null;
	process.argv.slice(2).forEach(argv => {
		if (argv.split("=")[0] === "--port")
			port = argv.split("=")[1]
	});
  	if (port == null || port.length === 0) {
		return null;
	}
	  
	const parsedPort = parseInt(port, 10);

	if (isNaN(parsedPort)) {
		console.error("\nArgument " + port + " is not a valid Port Number!");
		process.exit(1);
	}
	if (parsedPort <= 0 || parsedPort > 65535) {
		console.error("\nInvalid port number " + port + ", it must be in the range [1, 65535]");
		process.exit(1);
	}
 	return parsedPort;
}

module.exports.getPortFromArgv = getPortFromArgv;