import "./search-box-styles.css";
const SearchBox = ({ onChangeHandler, className }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder="search monsters"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
