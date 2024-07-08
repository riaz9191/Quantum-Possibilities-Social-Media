const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  type: {
    type: String,
    enum: ['photo', 'text'],
    required: true
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
  backgroundColor: {
    type: String,
    default: '#FFFFFF'
  },
  textColor: {
    type: String,
    default: '#000000'
  },
  privacy: {
    type: String,
    enum: ['Public', 'Friends', 'Only Me'],
    default: 'Public'
  },
  views: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    viewedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Story', storySchema);
