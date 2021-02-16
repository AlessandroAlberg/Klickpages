const express = require('express');
const setting = require('../controller/settingController');

const router = express.Router();

router.route('/:id').get(setting.getSetting);
router.route('/').post(setting.postSetting);
router.route('/').put(setting.putSetting);
router.route('/:id').delete(setting.deleteSetting);

module.exports = router;