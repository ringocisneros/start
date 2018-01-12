/** 
 * Set of useful functions used in tooling scripts
 * to run external commands from child process.
 */

const { spawn } = require('child_process');

function executeCommandAsync(command, args, options) {
	proc = spawn(command, args, {
		cwd: process.cwd() || options.path,
		env: process.env || options.env,
		encoding: 'utf-8' || options.encoding
	});
	proc.stdout.on('data', data => 
		console.log(String(data))
	);
	proc.stderr.on('data', data => 
		console.log(String(data))
	);
	proc.on('close', code => {
		if (code !== 0)
			console.error("Process ended with code #" + code);
	});
}

module.exports.executeCommandAsync = executeCommandAsync;