import React from 'react'
import BooksShelf from './BooksShelf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BooksList(props) {

    const { books, AllShelfes, onMove, onShowSearchBooks, showSearchPage } = props;
    console.log(AllShelfes);
    console.log(books);
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>


                    {
                        AllShelfes.map(shelf => (
                            <BooksShelf books={books} shelf={shelf} onMove={onMove} key={shelf.key} />
                        ))}


                </div>
                <div>



                </div>
            </div>
            <div className="open-search">

                <Link to="/search" onClick={() => onShowSearchBooks(!showSearchPage)}>Add a book</Link>
            </div>
        </div>
    )

    BooksList.propTypes = {
        books: PropTypes.array.isRequired,
        AllShelfes: PropTypes.array.isRequired,
        onMove: PropTypes.func.isRequired,
        onShowSearchBooks: PropTypes.func.isRequired,
        showSearchPage: PropTypes.bool.isRequired

    }
}

export default BooksList
