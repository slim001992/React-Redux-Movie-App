import React, { Component } from "react";
import { connect } from "react-redux";
import Rating from './rating';

class Description extends Component {

  render() {
    const [films] = this.props.films.filter(
        el => el.id === this.props.match.params.id
      );
    return (

      <div>
      <h3>{films.title}</h3>
      <span><Rating count={films.rating} /> </span>
      <p>{films.year}</p>
      </div>

      
    );
  }
}
const mapStateToProps = state => ({ films : state.MovieReducer.films, });
export default connect(mapStateToProps)(Description);