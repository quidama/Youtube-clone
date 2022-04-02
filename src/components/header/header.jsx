import React from 'react';
import Search from '../search/search';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

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
    <div className={styles.header}>
      <div className={styles.logoNsite} onClick={handleOnClick}>
        <img className={styles.logo} src={'/images/logo.png'} alt='logo' />
        <span className={styles.site}>Youtube</span>
      </div>
      <Search onSearch={handleOnSearch} onInit={handleOnInit} />
    </div>
  );
};

export default Header;
