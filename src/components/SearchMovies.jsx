import { toast } from 'react-hot-toast';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (!query) {
      toast.error('Please enter something');
      return;
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
