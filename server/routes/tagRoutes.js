const express = require('express');
const tag = require('../controller/tagController');

const router = express.Router();

router.route('/all/:pageId').get(tag.getTags);
router.route('/:id').get(tag.getTag);
router.route('/').post(tag.postTag);
router.route('/').put(tag.putTag);
router.route('/:id').delete(tag.deleteTag);

module.exports = router;