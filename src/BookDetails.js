import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getBook = async () => {
      const res = await BooksAPI.get(id);
      setBook(res);
    };

    if (mounted) {
      getBook();
    }

    return () => (mounted = false);
  }, [id]);
  console.log(book);
  return (
    <div className="book-info-box">
      <Link className="close-search" to="/">
        Close
      </Link>
      {book.imageLinks && book.authors && (
        <div className="book-container">
          <h1>{book.title}</h1>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>Book ID</td>
                  <td>{book.id}</td>
                </tr>
                <tr>
                  <td>Page Count</td>
                  <td>{book.pageCount}</td>
                </tr>
                <tr>
                  <td>Published Date</td>
                  <td>{book.publishedDate}</td>
                </tr>
                <tr>
                  <td>Preview Link</td>
                  <td>
                    <a href={book.previewLink} target="_blank" rel="noreferrer">
                      Preview
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Publisher</td>
                  <td>{book.publisher}</td>
                </tr>
                <tr>
                  <td>Current shelf</td>
                  <td>{book.shelf}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{book.language.toUpperCase()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
