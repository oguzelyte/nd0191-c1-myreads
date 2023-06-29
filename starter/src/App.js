import "./App.css";
import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const shelves = [
    { name: "Currently Reading", id: "currentlyReading" },
    { name: "Want to Read", id: "wantToRead" },
    { name: "Read", id: "read" },
  ];

  const [books, setBooks] = useState([]);

  const changeBookShelf = (shelf, bookId) => {
    const newBooks = books.map((b) => {
      return b.id === bookId ? { ...b, shelf: shelf } : b;
    });
    setBooks(newBooks);

    const finalBook = books.filter((b) => b.id === bookId);

    // TODO: refactor this updating database, should consider returning a book rather than book id
    const updateBook = async () => {
      const res = await BooksAPI.update(finalBook[0], shelf);
      // setBooks(res);
      // console.log(res);
    };

    console.log(updateBook());
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      console.log(res);
    };

    getBooks();
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {shelves.map((shelf, idx) => {
              return (
                <BookShelf
                  key={idx}
                  name={shelf.name}
                  books={books.filter((book) => {
                    return book.shelf === shelf.id;
                  })}
                  handleBookShelf={(shelf, bookId) =>
                    changeBookShelf(shelf, bookId)
                  }
                />
              );
            })}
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
