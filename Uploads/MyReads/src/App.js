import "./App.css";
import { useState, useEffect, useCallback, useReducer } from "react";
import * as BookApi from './BooksAPI';

import BooksSearch from "./Components/Search/BooksSearch";
import BooksList from "./Components/List/BooksList";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { debounce } from 'throttle-debounce';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [resultSearchbooks, setResultSearchbooks] = useState([]);
  const [flageChangeShelf, useFlageChangeShelf] = useState(false);




  useEffect(() => {
    const getBooks = async () => {
      const res = await BookApi.getAll();
      setBooks(res);
    };

    getBooks();

  }, []);

  const AllShelfes = [
    { key: 'currentlyReading', Title: 'Currently Reading' },
    { key: 'wantToRead', Title: 'Want to Read' },
    { key: 'read', Title: 'Read' }];



  const onMove = (book, shelfKey) => {

    BookApi.update(book, shelfKey);
    const newBook = newBooksState(book, shelfKey);
    if (shelfKey != "none") {
      book.shelf = shelfKey;
      setBooks(newBook.filter(value => value.id != book.id).concat(book));

    }
    else {
      setBooks(newBook.filter(value => value.id != book.id));
    }
  };

  const newBooksState = (book, shelfKey) =>

    books.map(obj => {

      if (obj.id === book.id) {
        return { ...obj, shelf: shelfKey };

      }
      else {

        return obj;
      }
    });
  const onSearchBooks = debounce(400, inputSearch => {
    // const onSearchBooks =  (  inputSearch) => {

    if (inputSearch.length > 0) {
      BookApi.search(inputSearch).then((result) => setResultSearchbooks(result));
    }
    else {
      setResultSearchbooks([]);

      console.log(resultSearchbooks);

    }
    console.log("Result Search For :" + inputSearch + " lenght :" + inputSearch.length + " //  IS :" + resultSearchbooks.length);
  });

  const onShowSearchBooks = (isShowSearch) => {

    setShowSearchpage(isShowSearch);
    setResultSearchbooks([]);

  }




  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BooksList books={books} AllShelfes={AllShelfes} onMove={onMove} onShowSearchBooks={onShowSearchBooks} showSearchPage={showSearchPage} />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <BooksSearch books={books} resultSearchbooks={resultSearchbooks} onSearchBooks={onSearchBooks} onMove={onMove} onShowSearchBooks={onShowSearchBooks} showSearchPage={showSearchPage} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
