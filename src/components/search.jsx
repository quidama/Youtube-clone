import React from 'react';

const Search = () => {
  return (
    <form className='search'>
      <input className='searchBox' placeholder='Search'></input>
      <div className='searchBtn'>
        <img type='text' src={'/images/search.png'} className='searchIcon' />
      </div>
    </form>
  );
};

export default Search;
