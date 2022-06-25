import React from 'react';
import BookShelfChange from './BookShelfChange';
import propTypes from 'prop-types';

function BookData(props) {

    const { book, onMove ,shelf} = props;
   
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url(${book.imageLinks ? book.imageLinks.thumbnail : 'icons/book-placeholder.svg'})`,
                        }}
                    ></div>
                    <BookShelfChange book={book} onMove={onMove}  shelfKey={book.shelf ? book.shelf : 'none'} />

                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">  {book.authors ? book.authors.join(', ') : 'Author:Unknown'}</div>
            </div>
        </li>
    )

    BookData.prototype = {
        book: propTypes.array.isRequired,
        onMove: propTypes.func.isRequired
    }
}

export default BookData
