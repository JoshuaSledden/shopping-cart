const express = require('express');
const routes = require('./routes');
const serverLoader = require('./loaders/server');
const dbLoader = require('./loaders/mongoose');

const app = async () => {
    try {
        const server = await serverLoader();

        // Use middleware.
        server.use(express.urlencoded({ extended: true }));
        server.use(express.json());

        // Import the routes.
        server.use(routes);

        // Connect to the database.
        await dbLoader();

        return server;
    }
    catch (err) { 
        throw new Error(`Error starting app: ${err}`);
    }
}

app();
    
module.exports = app;