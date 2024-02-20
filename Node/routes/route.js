// route.js
const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/readData', controller.getAllAlarms);
router.get('/readData/:id', controller.getAlarmById);
router.post('/readData', controller.createAlarm);
router.put('/readData/:id', controller.updateAlarm);
router.delete('/readData/:id', controller.deleteAlarm);

module.exports = router;
