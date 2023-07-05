import Book from "./Book";
import PropTypes from "prop-types";

const BookList = ({ books, handleBookShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((book, idx) => (
        <li key={book.id}>
          <Book
            book={book}
            handleBookShelf={(shelf, book) => handleBookShelf(shelf, book)}
          />
        </li>
      ))}
    </ol>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookShelf: PropTypes.func.isRequired,
};

export default BookList;
