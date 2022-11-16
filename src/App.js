import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';

function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState('');

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
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
  }, [id])

  return (
    <div className="App">
      <div className='pokemon-info_container'>
        <SearchBar
          url
          setData = {setData} 
          setId = {setId}
        />
        <p className='pokemon-info'>{data.name} <span>#{data.id}</span></p>
        {/* <p>Type: {data}</p> */}
      </div>
      <div className='pokemon-images_container'>
        {data.sprites ? (// if data.sprites is not falsy return the images
          <Card 
            data={data}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
}

export default App;
