import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((dataType, index) => 
      <MovieCard
        key={index}
        title={dataType.title}
        IMDBRating={dataType.IMDBRating}
        genres={dataType.genres}
        poster={dataType.poster}
      /> 
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

