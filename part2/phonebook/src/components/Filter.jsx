const Filter = ({searchField, setSearchField}) => {
  return (
    <div>
      Filter: <br />
      <input
        type="search"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
    </div>
  );
};

export default Filter;
