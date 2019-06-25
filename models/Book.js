const mongoose = require('mongoose')

const bookSchema = {
  id: {
    type: Number,
    unique: true
  },
  title: String,
  genre: String,
  author: String,
  price: Number,
}

module.exports = mongoose.model('book', bookSchema)
