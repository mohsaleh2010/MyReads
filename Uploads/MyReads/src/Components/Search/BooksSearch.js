import React from 'react'
import BookData from '../List/BookData';
import ResultSearch from './ResultSearch';
import InputSearch from './InputSearch';
import propTypes from 'prop-types';
 

function BooksSearch(props) {
    const { books, resultSearchbooks, onSearchBooks, onMove, onShowSearchBooks, showSearchPage } = props;

    return (
        <div className="search-books">

            <InputSearch onSearchBooks={onSearchBooks} showSearchPage={showSearchPage} onShowSearchBooks={onShowSearchBooks} />
            <ResultSearch books={books} resultSearchbooks={resultSearchbooks} onMove={onMove} />
        </div>
    )

    BooksSearch.prototype = {
        books: propTypes.array.isRequired,
        resultSearchbooks: propTypes.array.isRequired,
        onSearchBooks: propTypes.func.isRequired,
        onMove: propTypes.func.isRequired,
        onShowSearchBooks: propTypes.func.isRequired,
        showSearchPage: propTypes.bool.isRequired
 
    }

}

export default BooksSearch
