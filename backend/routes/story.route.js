const express = require('express');
const { createStory } = require('../controllers/story.controller');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/story', authMiddleware, createStory);

module.exports = router;
