const express = require('express');
const page = require('../controller/pageController');

const router = express.Router();

router.route('/').get(page.getPages);
router.route('/:id').get(page.getPage);
router.route('/').post(page.postPage);
router.route('/').put(page.putPage);

module.exports = router;