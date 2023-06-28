import BookList from "./BookList";

const BookShelf = ({ name, books, handleBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <BookList
          books={books}
          handleBookShelf={(shelf, bookId) => handleBookShelf(shelf, bookId)}
        />
      </div>
    </div>
  );
};

export default BookShelf;
