const Story = require('../models/story.model');

exports.createStory = async (req, res) => {
  try {
    const { user, type, text, image, backgroundColor, textColor, privacy } = req.body;
    const newStory = new Story({
      user,
      type,
      text,
      image,
      backgroundColor,
      textColor,
      privacy
    });

    const savedStory = await newStory.save();
    res.status(200).json({
      statusCode: 1,
      message: "Data saved successfully.",
      status: "success",
      data: savedStory
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('user', 'username email');
    if (!story) return res.status(404).json({ error: 'Story not found' });
    res.status(200).json(story);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStory = async (req, res) => {
  try {
    const { text, image, backgroundColor, textColor, privacy } = req.body;
    const updatedStory = await Story.findByIdAndUpdate(
      req.params.id,
      { text, image, backgroundColor, textColor, privacy },
      { new: true }
    );
    if (!updatedStory) return res.status(404).json({ error: 'Story not found' });
    res.status(200).json(updatedStory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStory = async (req, res) => {
  try {
    const deletedStory = await Story.findByIdAndDelete(req.params.id);
    if (!deletedStory) return res.status(404).json({ error: 'Story not found' });
    res.status(200).json({ message: 'Story deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addView = async (req, res) => {
  try {
    const { userId } = req.body;
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ error: 'Story not found' });

    const alreadyViewed = story.views.some(view => view.user.toString() === userId);
    if (!alreadyViewed) {
      story.views.push({ user: userId });
      await story.save();
    }

    res.status(200).json(story);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStoryViews = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('views.user', 'username email');
    if (!story) return res.status(404).json({ error: 'Story not found' });
    res.status(200).json(story.views);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
