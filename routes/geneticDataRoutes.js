const express = require('express');
const router = express.Router();
const { uploadGeneticData } = require('../controllers/geneticDataController');

router.post('/upload', uploadGeneticData);

module.exports = router;
