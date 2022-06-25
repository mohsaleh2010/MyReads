import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
function InputSearch(props) {

    const { onSearchBooks, showSearchPage, onShowSearchBooks } = props;
    const [inputValue, setInputValue] = useState("");

    const OnInputSearchChange = (e) => {
        setInputValue(e.target.value);
        onSearchBooks(e.target.value);
    }

    return (
        <div className="search-books-bar">


            <Link to="/" onClick={() => onShowSearchBooks(!showSearchPage)} className="close-search">Close</Link>

            <div className="search-books-input-wrapper">
                <input onChange={OnInputSearchChange}
                    type="text" value={inputValue}
                    placeholder="Search by title, author, or ISBN"
                />
            </div>
        </div>
    )

    InputSearch.prototype = {
        onSearchBooks: propTypes.func.isRequired,
        showSearchPage: propTypes.bool.isRequired,
        onShowSearchBooks: propTypes.func.isRequired
    }
}

export default InputSearch
