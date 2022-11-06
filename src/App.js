import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [id, setId] = useState(1);
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then(function (res) {
        // handle success
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      })
  }, [])

  let handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value >= 906) {
        return ('Please choose a range under 906')
      }
      setId(e.target.value);
      axios.get(url).then(function(res){
        setData(res.data);
      }).catch(function (err) {
        console.log(err)
      })
      return
    }
  }

  return (
    <div className="App">
      {/* <SearchBar /> */}
      <div className='pokemon-info'>
        <input 
          onKeyDown={handleSearch}
          placeholder='Enter Pokemon Id or Name'
        />
        <p>Name: {data.name}</p>
        <p>ID: {data.id}</p>
        {data.sprites && // if data.sprites is not undefined return the images
          <div className='pokemon-images'>
            {data.sprites.front_default && // if front default image is not undefined return the images
            <div className='pokemon-images_container'>
              <p>{data.name} regular front</p>
              <img src={data.sprites.front_default || ''} alt='front default' />
            </div>
            }
            {data.sprites.back_default && // if back default image is not undefined return the images
            <div className='pokemon-images_container'>
              <p>{data.name} regular back</p>
              <img src={data.sprites.back_default || ''} alt='back default' />
            </div>
            }
            {data.sprites.front_shiny && // if front shiny image is not undefined return the images
            <div className='pokemon-images_container'>
              <p>{data.name} shiny front</p>
              <img src={data.sprites.front_shiny} alt='front shiny' />
            </div>
            }
            {data.sprites.back_shiny && // if back shiny image is not undefined return the images
            <div className='pokemon-images_container'>
              <p>{data.name} shiny back</p>
              <img src={data.sprites.back_shiny} alt='back shiny'/>
            </div>
            }
          </div>
        }
        </div>
    </div>
  );
}

export default App;
