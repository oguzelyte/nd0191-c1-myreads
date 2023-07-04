import { Link } from "react-router-dom";
import BookList from "./BookList";
import PropTypes from "prop-types";

const SearchBooks = ({
  handleSearchInput,
  searchBooks,
  changeBookShelf,
  clearSearch,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link onClick={clearSearch} className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handleSearchInput(e)}
          />
        </div>
      </div>
      {searchBooks.length > 0 && (
        <div className="search-books-results">
          <BookList
            books={searchBooks}
            handleBookShelf={(shelf, book) => changeBookShelf(shelf, book)}
          />
        </div>
      )}
    </div>
  );
};

SearchBooks.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  searchBooks: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default SearchBooks;
