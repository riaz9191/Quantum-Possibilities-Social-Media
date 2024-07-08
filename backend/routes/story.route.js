const express = require('express');
const router = express.Router();
const storyController = require('../controllers/story.controller');

// Routes
router.post('/', storyController.createStory);
router.get('/', storyController.getAllStories);
router.get('/:id', storyController.getStoryById);
router.put('/:id', storyController.updateStory);
router.delete('/:id', storyController.deleteStory);
router.post('/:id/view', storyController.addView);
router.get('/:id/views', storyController.getStoryViews);

module.exports = router;
