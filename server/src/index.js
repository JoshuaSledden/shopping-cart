const express = require('express');
const config = require('./config');
const routes = require('./routes');
const mongooseClient = require('./loaders/mongoose');

// Destruct the needed values from the config.
const { port, address } = config.server;

const startServer = (port, address) => {
    try {
        // Init express.
        const app = express();

        // Listen on server.
        app.listen(port, address, () => {
            console.log(`Server listening at ${address}:${port}`);
            return true;
        });

        // Connect to the mongoose client.
        mongooseClient();

        // Import the routes.
        app.use(routes);
    }
    catch (err) {
        throw new Error(`Error when attempting to start server: ${err}`);
    }
}

startServer(port, address);