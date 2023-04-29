import PropTypes from 'prop-types';
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
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input name="query" type="text" style={{ width: '300px' }} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
