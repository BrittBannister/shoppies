import React from 'react'
import film from '../../assets/film.svg'

function Search(props) {
 return (
  <header className='search'>
   <img className='search__icon' src={film} alt='film' />
   <div className='search__details'>
    <h1 className='search__header'>The Shoppies Awards.</h1>
    <form>
     <input
      placeholder='Search for a movie!'
      className='search__input'
      name='search'
      onChange={(e) => props.searchHandler(e.target.value)}
     />
    </form>
   </div>
  </header>
 )
}

export default Search
