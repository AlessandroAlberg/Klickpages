const express = require('express');
const page = require('./pageRoutes');
const setting = require('./settingRoutes');
const tag = require('./tagRoutes');
const router = express.Router();

router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);

router.use('/page', page);
router.use('/setting', setting);
router.use('/tag', tag);

module.exports = router;