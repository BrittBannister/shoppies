import React from 'react'
import Movie from '../Movie'
import LoadingMovie from '../LoadingMovie'

function Results(props) {
 return (
  <section className='results'>
   <h2 className='results__header'>Search Results: </h2>
   {!props.searchInProgress && !props.results.length && (
    <h3 className='results__empty'>Search for your favorite movie above!</h3>
   )}
   {!!props.results.length && (
    <ul className='results__list'>
     {props.results.map((movie) => {
      return (
       <Movie
        poster={movie.Poster}
        title={movie.Title}
        year={movie.Year}
        key={movie.imdbID}
        movie={movie}
        nominationHandler={props.nominationHandler}
        class={'nominate'}
        enabled={movie.nominated || props.complete ? false : true}
       />
      )
     })}
    </ul>
   )}
   {!props.results.length && props.searchInProgress && (
    <ul className='results__list'>
     <LoadingMovie />
     <LoadingMovie />
     <LoadingMovie />
    </ul>
   )}
  </section>
 )
}

export default Results
