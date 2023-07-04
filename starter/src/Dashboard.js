import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const Dashboard = ({ shelves, books, changeBookShelf }) => {
  return (
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
              handleBookShelf={(shelf, book) => changeBookShelf(shelf, book)}
            />
          );
        })}
      </div>
      <div className="open-search">
        <Link className="add-contact" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default Dashboard;
