import React, { useRef } from 'react';

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
    <form ref={formRef} className='search' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='searchBox'
        placeholder='Search'
      ></input>
      <div className='searchBtn'>
        <img src={'/images/search.png'} className='searchIcon' alt='search' />
      </div>
    </form>
  );
};

export default Search;
