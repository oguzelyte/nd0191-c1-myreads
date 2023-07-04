import PropTypes from "prop-types";

const MoveBook = ({ shelf, handleShelf }) => {
  return (
    <select
      defaultValue={shelf}
      onChange={(e) => {
        handleShelf(e.target.value);
      }}
    >
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

MoveBook.propTypes = {
  shelf: PropTypes.string.isRequired,
  handleShelf: PropTypes.func.isRequired,
};

export default MoveBook;
