import React, {PropTypes} from 'react';

const Search = ({value, onChange}) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <div>
      Search Field:
      <div>
        <input
          type="text"
          placeholder="Filter"
          value={value}
          onChange={handleChange}
          />
      </div>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;

