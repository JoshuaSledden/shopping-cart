const express = require('express');
const {port, address} = require('./config').server;
const routes = require('./routes');

const startServer = (port, address) => {
    try {
        // Init express.
        const app = express();

        // Listen on server.
        app.listen(port, address, () => {
            console.log(`Server listening at ${address}:${port}`);
            return true;
        });
        
        // Import the routes.
        app.use(routes);
    }
    catch (err) {
        throw new Error(`Error when attempting to start server: ${err}`);
    }
}

startServer(port, address);