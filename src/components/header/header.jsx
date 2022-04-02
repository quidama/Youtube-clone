import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
  const inputRef = useRef();
  const formRef = useRef();

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

  const onSubmit = (event) => {
    event.preventDefault();
    const search = inputRef.current.value;
    search && props.onSearch(search);
    formRef.current.reset();
  };

  return (
    <div className={styles.header}>
      <div className={styles.logoNsite} onClick={handleOnClick}>
        <img className={styles.logo} src={'/images/logo.png'} alt='logo' />
        <span className={styles.site}>Youtube</span>
      </div>
      <form ref={formRef} className={styles.search} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type='text'
          className={styles.input}
          placeholder='Search'
        ></input>
        <div className={styles.button}>
          <img
            src={'/images/search.png'}
            className={styles.icon}
            alt='search'
          />
        </div>
      </form>
    </div>
  );
};

export default Header;
