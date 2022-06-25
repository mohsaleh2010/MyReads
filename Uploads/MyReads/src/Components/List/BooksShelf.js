import propTypes from 'prop-types';
import React from 'react'
import BookData from './BookData';

function BooksShelf(props) {
  const { books, shelf, onMove } = props;
  const book = books.filter(b => b.shelf === shelf.key);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {shelf.Title}  </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

          {book.map(b => (
            <BookData book={b} onMove={onMove} key={b.id} />
          ))}


        </ol>
      </div>
    </div>
  )

  BooksShelf.prototype = {
    books: propTypes.array.isRequired,
    shelf: propTypes.string.isRequired,
    onMove: propTypes.func.isRequired
  }
}

export default BooksShelf
