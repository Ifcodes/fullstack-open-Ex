const Filter = ({ searchField, setSearchField }) => {
  return (
    <div>
      <label htmlFor="filter">Filter:</label> <br />
      <input
        id="filter"
        type="search"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
    </div>
  );
};

export default Filter;
