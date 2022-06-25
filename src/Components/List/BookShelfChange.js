import propTypes from 'prop-types';
import React, { useState, useReducer } from 'react'


function BookShelfChange(props) {
    const { book, onMove,    shelfKey } = props;

    const [selectValue, setselectValue] = useState(props.shelfKey);
    console.log("is shelfKey :" + shelfKey);


    const handleChangeShelf = (e) => {

        setselectValue(e.target.value);
        // console.log(e.target.value);
        // console.log(book);

        onMove(book, e.target.value);

    }
    return (
        <div className="book-shelf-changer">
            <select onChange={(e) => handleChangeShelf(e)} value={selectValue}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading"> Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )

    BookShelfChange.prototype = {
        book: propTypes.array.isRequired,
        onMove: propTypes.func.isRequired,
        shelfKey: propTypes.string.isRequired
    }

}

export default BookShelfChange
