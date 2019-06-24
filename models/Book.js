const mongoose = require('mongoose')

const bookSchema = {
  title: String,
  genre: String,
  author: String
}

module.exports = mongoose.model('book', bookSchema)
