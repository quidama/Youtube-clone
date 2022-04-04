import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

function Header({ onSearch }) {
  const inputRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  const onSubmit = event => {
    event.preventDefault();
    const value = inputRef.current.value;
    value && onSearch(value);
    formRef.current.reset();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoNsite} onClick={handleOnClick}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <span className={styles.site}>Youtube</span>
      </div>
      <form ref={formRef} className={styles.search} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search..."
        />
        <button className={styles.button} type="submit">
          <img src="/images/search.png" className={styles.icon} alt="search" />
        </button>
      </form>
    </header>
  );
}

export default Header;
