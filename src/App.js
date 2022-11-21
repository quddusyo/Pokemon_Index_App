import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Tag from './components/Tag/Tag';
import Header from './components/Header/Header';

function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState('');

  useEffect(() => { // fetch pokemon data starting with id 1 on render
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
      <Header 
        url
        setData = {setData} 
        setId = {setId}
      />
      <div className='pokemon-info_container'>
        <p className='pokemon-info'>{data.name} <span>#{data.id}</span></p>
        {data.types && (// if data.types is not falsy return the images
          <Tag
            data={data}
          />
        )}
      </div>
      <div className='pokemon-images_container'>
        {data.sprites && (// if data.sprites is not falsy return the images
          <Card 
            data={data}
          />
        )}
      </div>
    </div>
  );
}

export default App;
