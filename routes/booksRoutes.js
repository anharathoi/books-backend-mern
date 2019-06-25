const express = require('express')
const router = express.Router()
const { getAllBooks, getOneBook, createNewBook, seedBooks, updateOneBook, deleteOneBook } = require('../controllers/booksController')


router.get( '/books', getAllBooks )
router.post('/books/newbook', createNewBook )

router.get( '/books/:id', getOneBook )

router.put('/books/:id', updateOneBook)

router.delete('/books/:id', deleteOneBook)

router.get('/seed', seedBooks )

module.exports = router
