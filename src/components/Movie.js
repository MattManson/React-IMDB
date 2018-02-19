import React, {Component} from 'react';

class Movie extends Component{
  render(){
    return (<div>
      <h4>{this.props.title}</h4>
      <p>{this.props.children}</p>
    </div>);
  }

}

export default Movie;
