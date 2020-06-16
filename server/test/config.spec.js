const assert = require('chai').assert;

const config = require('../src/config')

describe('Validate config variables', () => {
    it('Server Address is valid', () => {
        assert.isNotEmpty(config.server.address);
    });

    it('Server Port is valid', () => {
        assert.isNumber(config.server.port);
    });

    it('Database URI is valid', () => {
        assert.isNotEmpty(config.db.uri);
    })
});

