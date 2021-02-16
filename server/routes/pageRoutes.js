const express = require('express');
const page = require('../controller/pageController');

const router = express.Router();

router.route('/').get(page.getPage);

module.exports = router;