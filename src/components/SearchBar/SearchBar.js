import React from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ url ,setData, id, setId }) => { // passing props thorugh
//   let handleClick = (e) => { // handle click event
//     e.preventDefault();
//     e.key = 'Enter';
//     handleSearch();
//   }
  let handleSearch = (e) => { // if user presses enter, return the value of what they entered
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.target.value >= 906) { // if the pokemon index is invalid show invalid default text
        console.res('Invalid pokemon name or ID');
      }
      setId(e.target.value);
      e.target.value='';
      axios.get(url).then(function(res){
        setData(res.data);
      }).catch(function (err) {
        console.log(err)
      })

      return;
    }
  }
  return (
    <form>
        <input 
          onKeyDown={handleSearch}
          placeholder='Search Pokemon by Name or ID...'
        />
        {/* <button
          onClick={handleClick}
        >
          Search
        </button> */}
    </form>
  )
}

export default SearchBar