import React, {Component} from 'react';
import Movie from './Movie'

class MovieList extends Component{

  render(){

    const movieNodes = this.props.movies.map(movie => {
      return (
        <Movie title={movie.title} key={movie.id}>
          {movie.showtime}
        </Movie>
      )
    })

    return <div className="movie-list">{movieNodes}</div>
  }

}
export default MovieList;
