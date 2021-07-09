import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
export class Movie extends Component {
    render() {
        return (
        
              <div>
                  <Container id='container'>
                  <img src={this.props.image_url} />
          <h2>{this.props.title}</h2>
          <p id='ov'>{this.props.overview}</p>

          <p id="ps">Average votes: {this.props.average_votes}</p>
          <p id="ps">Popularity: {this.props.popularity}</p>
          <p id="ps">released_date: {this.props.released_date}</p>
     
                  </Container>
            </div>
        )
    }
}

export default Movie
