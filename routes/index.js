const express = require('express');
const router = express.Router();

router.use('/notion', require('./notion'));

module.exports = router;
