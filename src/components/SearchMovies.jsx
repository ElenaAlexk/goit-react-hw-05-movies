const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (!query) {
      window.alert('Please enter movie');
    }
    onSubmit(query);
    evt.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchMovies;
