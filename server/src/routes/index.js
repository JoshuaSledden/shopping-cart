const express = require('express');
const router = express.Router();

// Import the products routes.
router.use('/products', require('./products'));

router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;