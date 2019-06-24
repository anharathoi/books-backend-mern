const faker = require('faker')

let genres = [ 'comedy', 'drama', 'thriller', 'action']

const createThisManyFakeBooks = (numberOfBooks) => {
  let books = []
  for(i = 0; i < numberOfBooks; i++){
    let randomNum = Math.floor(Math.random() * 4)
    let newBook = {
      title: faker.random.words(),
      genre: genres[randomNum],
      author: faker.name.findName()
    }
    books.push(newBook)
  }
  return books
}

module.exports = {
  createThisManyFakeBooks
}