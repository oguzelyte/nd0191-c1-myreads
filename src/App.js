import "./App.css";
import { useEffect, useMemo, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import debounce from "lodash.debounce";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import Dashboard from "./Dashboard";
import BookDetails from "./BookDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const shelves = [
    { name: "Currently Reading", id: "currentlyReading" },
    { name: "Want to Read", id: "wantToRead" },
    { name: "Read", id: "read" },
  ];

  const changeBookShelf = (shelf, book) => {
    BooksAPI.update(book, shelf);

    const newBooks = books.map((b) => {
      return b.id === book.id ? { ...b, shelf: shelf } : b;
    });

    setBooks(newBooks);
    setSearchBooks(
      searchBooks.map((b) => {
        return b.id === book.id ? { ...b, shelf: shelf } : b;
      })
    );
  };

  useEffect(() => {
    let mounted = true;

    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    if (mounted) {
      getBooks();
    }

    return () => (mounted = false);
  }, []);

  const updateSearchQuery = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchBooks = async () => {
      const res = await BooksAPI.search(query, 20);

      if (res.error) {
        setSearchBooks([]);
        return;
      }

      const filteredResults = res
        .filter((b) => b.authors && b.imageLinks)
        .map((b) => {
          const foundBook = books.find((b2) => b2.id === b.id);
          if (foundBook) {
            b.shelf = foundBook.shelf;
            return b;
          }
          return b;
        });
      setSearchBooks(filteredResults);
    };

    query === "" ? setSearchBooks([]) : searchBooks();
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(updateSearchQuery, 300);
  }, [books, searchQuery]);

  const clearSearchedBooks = () => {
    setSearchBooks([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exaxt
          path="/"
          element={
            <Dashboard
              shelves={shelves}
              books={books}
              changeBookShelf={(shelf, book) => changeBookShelf(shelf, book)}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              searchBooks={searchBooks}
              handleSearchInput={debouncedChangeHandler}
              changeBookShelf={(shelf, book) => changeBookShelf(shelf, book)}
              clearSearch={clearSearchedBooks}
            />
          }
        />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
