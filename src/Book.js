import { Link } from "react-router-dom";
import MoveBook from "./MoveBook";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";

const Book = ({ book, handleBookShelf }) => {
  return (
    <div className="book">
      <Link className="book-details" to={`/books/${book.id}`}>
        <ReactSVG src="info.svg" />
      </Link>
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <MoveBook
            shelf={book.shelf ?? "none"}
            handleShelf={(shelf) => handleBookShelf(shelf, book)}
          />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors.map((author, idx, arr) => (
          <span key={idx}>{author + (idx !== arr.length - 1 ? ", " : "")}</span>
        ))}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookShelf: PropTypes.func.isRequired,
};

export default Book;
