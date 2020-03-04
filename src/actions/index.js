const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST' // запрос отправлен
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS', // получен результат
    payload: newBooks
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE', // произошла ошибка
    payload: error
  }
}

//new actionCreator
export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  }
}

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)))
}

export {
  fetchBooks
}

