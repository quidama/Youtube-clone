import React, { useRef } from 'react';
import styles from './search.module.css';

const Search = (props) => {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const search = inputRef.current.value;
    search && props.onSearch(search);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.search} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='submit'
        className={styles.input}
        placeholder='Search'
      ></input>
      <div className={styles.button}>
        <img src={'/images/search.png'} className={styles.icon} alt='search' />
      </div>
    </form>
  );
};

export default Search;
