const Story = require('../models/story.model');

const createStory = async (req, res) => {
  const { content, backgroundColor, textColor, privacy } = req.body;
  const userId = req.user.userId;

  try {
    const story = new Story({ user: userId, content, backgroundColor, textColor, privacy });
    await story.save();

    res.status(201).json({ message: 'Story created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStory };
