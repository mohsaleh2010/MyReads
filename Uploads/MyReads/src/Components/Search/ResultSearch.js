import React from 'react';
import BookData from '../List/BookData';
import propTypes from 'prop-types';

function ResultSearch(props) {
    const { books, resultSearchbooks, onMove } = props;

    const EditedBooks =

        Array.from(resultSearchbooks).map(book => {

            books.map(b => {
                if (b.id === book.id) {

                    book.shelf = b.shelf;
                }
                return b;
            });
            return book;
        });



    if (Array.isArray(EditedBooks)) {
        return (
            <div className="search-books-results">
                <ol className="books-grid">

                    {EditedBooks.map(b => (
                        <BookData
                            book={b}
                            onMove={onMove}
                            shelf={b.shelf ? b.shelf : 'none'}
                            key={b.id} />
                    ))}
                </ol>
            </div>
        )
    }
    else {
        return 'results are not array'
    }

    ResultSearch.prototype = {
        books: propTypes.array.isRequired,
        resultSearchbooks: propTypes.array.isRequired,
        onMove: propTypes.func.isRequired
    }

}

export default ResultSearch
