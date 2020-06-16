const mongoose = require('mongoose');
const config = require('../config');

module.exports = async () => {
    await mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
};