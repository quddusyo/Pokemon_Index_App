import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';

const Header = ({ url, setData, setId }) => {
  return (
    <div className='header_container'>
        <div className='header_logo-container'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='header_search-container'>
            <SearchBar 
                url
                setData = {setData} 
                setId = {setId}
            />
        </div>
    </div>
  )
}

export default Header