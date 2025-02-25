const express = require('express');
const router = express.Router();
const { createExam } = require('../controllers/examController');  // Import the controller

// POST request to create an exam
router.post('/', createExam);

module.exports = router;
