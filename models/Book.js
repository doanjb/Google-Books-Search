const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  bookId: {
    type: String,
    trim: true,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  authors: [{ type: String, trim: true, required: true }],
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Book', BookSchema);
