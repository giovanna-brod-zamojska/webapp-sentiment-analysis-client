const express = require('express');
const router = express.Router();
const sentimentController = require('../controllers/sentiment.controller');

router.post('/', sentimentController.analyzeSentiment);

module.exports = router;