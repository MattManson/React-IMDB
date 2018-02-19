import React, {Component} from 'react';
import MovieList from '../components/MovieList'

class MovieBox extends Component {

  constructor(){
    super();
    this.state = {
      movies: [
        {id: 1, title: "Thor Ragnarok", showtime: "10pm"},
        {id: 2, title: "Blade Runner 2049", showtime: "11pm"},
        {id: 3, title: "Get Out", showtime: "12pm"},
        {id: 4, title: "Dunkirk", showtime: "6pm"}
      ]
    }
    this.movieTimes = this.movieTimes.bind(this);
  }

  movieTimes(){
    console.log("movie times and stuff");
  }

  render(){
    return (<div className="movie-box">
      <MovieList movies={this.state.movies}/>
      <button onClick={this.movieTimes}>Get Showtimes!</button>
    </div>)
  }

}


export default MovieBox;
