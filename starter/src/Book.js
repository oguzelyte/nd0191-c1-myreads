import MoveBook from "./MoveBook";

const Book = ({ book, handleBookShelf }) => {
  return (
    <div className="book">
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
            shelf={book.shelf}
            handleShelf={(shelf) => handleBookShelf(shelf, book.id)}
          />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors.map((author, idx, arr) => (
          <span>{author + (idx !== arr.length - 1 ? ", " : "")}</span>
        ))}
      </div>
    </div>
  );
};

export default Book;
