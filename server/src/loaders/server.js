const express = require('express');
const config = require('../config');

module.exports = async () => {
    // Destruct the server variables from config.
    const { port, address } = config.server;

    // Create the express application.
    const server = express();
    
    try {
        await server.listen(port, address);
        console.log(`Server listening at ${address}:${port}`);
        return server;
    }
    catch (err) {
        throw new Error(`Error launching server: ${err}`);
    }
}