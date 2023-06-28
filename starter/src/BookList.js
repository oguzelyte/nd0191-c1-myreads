import Book from "./Book";

const BookList = ({ books, handleBookShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((book, idx) => (
        <li key={idx}>
          <Book
            book={book}
            handleBookShelf={(shelf, bookId) => handleBookShelf(shelf, bookId)}
          />
        </li>
      ))}
    </ol>
  );
};

export default BookList;
