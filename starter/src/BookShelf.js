import BookList from "./BookList";
import PropTypes from "prop-types";

const BookShelf = ({ name, books, handleBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <BookList
          books={books}
          handleBookShelf={(shelf, book) => handleBookShelf(shelf, book)}
        />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;
