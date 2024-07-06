const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  backgroundColor: { type: String },
  textColor: { type: String },
  privacy: { type: String, enum: ['Public', 'Friends', 'Only Me'], default: 'Public' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Story', storySchema);
