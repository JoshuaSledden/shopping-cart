const dotenv = require('dotenv');

// Enable dotenv
dotenv.config();

// Destruct values from our .env file
const {
    SERVER_ADDRESS,
    SERVER_PORT,
    DB_URI
} = process.env;

// Export our variables into a more accessible object.
module.exports = {
    server: {
        address: SERVER_ADDRESS || '127.0.0.1',
        port: parseInt(SERVER_PORT) || 8080
    },
    db: {
        uri: DB_URI
    }
}