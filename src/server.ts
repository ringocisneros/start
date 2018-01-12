import * as express from 'express'
import { RequestHandler, Request, Response, NextFunction } from "express-serve-static-core"
import { initRoutes } from "./routes"

import { install } from 'source-map-support'
install();

const getPortFromArgv = require('../scripts/lib/parsers').getPortFromArgv;

const app = express()
initRoutes(app)

var PORT = getPortFromArgv() || process.env.PORT;

if (PORT == null) {
	console.error("Port number not found in the environment variables...\n");
	console.error("Please provide a Valid port number using the argument '--port='\n");
	process.exit(1);
} else {
    app.listen(PORT, function () {
        console.log("Listening on " + PORT);
    });
}

