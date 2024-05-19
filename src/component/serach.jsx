import { useState, useEffect } from 'react';
import '../styles/search.css';

const Search = ({ setQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  useEffect(() =>{
    setQuery(searchTerm);
  },[searchTerm])


  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a Pokémon"
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      
    </div>
  );
};

export default Search;
