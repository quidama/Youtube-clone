import React from 'react';
import Search from './search';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    props.onInit(!props.init);
    navigate('/');
  };

  const handleOnSearch = (search) => {
    props.onSearch(search);
  };

  const handleOnInit = () => {
    props.onInit(!props.init);
  };

  return (
    <div className='header'>
      <div className='logoNsite' onClick={handleOnClick}>
        <img className='logo' src={'/images/logo.png'} alt='logo' />
        <span className='site'>Youtube</span>
      </div>
      <Search onSearch={handleOnSearch} onInit={handleOnInit} />
    </div>
  );
};

export default Header;
