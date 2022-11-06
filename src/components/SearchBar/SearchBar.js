import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const getPokemonData = (searchInput) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchInput}/`).then((res) => {
       console.log(res.data);
       setSearchInput(res.data)
    })
  }

  // if user presses enter, return the value of what they entered
  const handleSearch = (e) => {
  // console.log(e.key);
  if (e.key === 'Enter') {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(getPokemonData(searchInput));
    return getPokemonData(searchInput);
  }
}
  return (
    <form
      className='searchBar'
      onSubmit={(e) => e.preventDefault()}
    >
    <label className='searchLabel' htmlFor='searchNameorID'> search name or id</label>
    <input 
        id='searchNameorID'
        className='searchInput'
        placeholder='Enter Name or ID'
        onKeyDown={handleSearch}
    />
</form>
  )
}

export default SearchBar