const Book = require('../models/Book')
const { createThisManyFakeBooks} = require('../utils/utils')

const getAllBooks = async (req, res) => {
  const books = await Book.find()
  res.status(200).send(books)
}

const getOneBook = async (req, res) => {
  const { title } = req.params
  const book = await Book.findOne({title})
  res.status(200).send(book)
}

const createNewBook = async (req, res) => {
  try {
    const { title, genre, author } = req.body
    const newBook = await Book.create({ title, genre, author })
    res.status(201).send(`Successfully created book ${newBook.title}`)
  } catch(err) {
    res.status(400).send(`There has been an error ${err}`)
  }
}

const seedBooks = async (req, res) => {
  // drop all books
  await Book.remove()
  const newBooks = createThisManyFakeBooks(3)
  try {
    const books = await Book.insertMany(newBooks)
    return res.status(201).send(books)
  } catch(err){
    return res.status(400).send(err)
  }
}

const updateOneBook = async (req, res) => {
  const { title } = req.params
  const book = await Book.findOne({title})
  const newTitle = req.body.title || book.title
  const author = req.body.author || book.author
  const genre = req.body.genre || book.genre

  try {
    book.title = newTitle
    book.author = author
    book.genre = genre
    await book.save()
    res.status(200).send(`Sucessfully updated ${title} to ${newTitle}`)
  } catch(err) {
    res.status(400).send(`Failed to update book: ${err}`)
  }
}
module.exports = {
  getAllBooks,
  getOneBook,
  createNewBook,
  seedBooks,
  updateOneBook
}
