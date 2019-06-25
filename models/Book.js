const mongoose = require('mongoose')

const bookSchema = {
  id: Number,
  title: String,
  genre: String,
  author: String,
  price: Number,
}

module.exports = mongoose.model('book', bookSchema)
