import React from 'react';
import Search from './search';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };
  return (
    <div className='header'>
      <div className='logoNsite' onClick={handleOnClick}>
        <img className='logo' src={'/images/logo.png'} alt='logo' />
        <span className='site'>Youtube</span>
      </div>
      <Search />
    </div>
  );
};

export default Header;
