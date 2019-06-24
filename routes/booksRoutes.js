const express = require('express')
const router = express.Router()
const { getAllBooks, getOneBook, createNewBook, seedBooks, updateOneBook } = require('../controllers/booksController')


router.get( '/books', getAllBooks )
router.get( '/books/:title', getOneBook )

router.post('/newbook', createNewBook )

router.put('/books/:title', updateOneBook)

router.get('/seed', seedBooks )

module.exports = router
