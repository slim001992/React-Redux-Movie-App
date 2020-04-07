import React, { Component } from "react";
import { connect } from "react-redux";
import Rating from './rating';

class Description extends Component {

  render() {
    const [films] = this.props.films.filter(
        el => el.id === this.props.match.params.id
      );
    return (

      <div className="description">
        <div className="cardImage">
    <div className="movie-image" style={{ backgroundImage: `url('${films.image ? films.image : "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"}')` }} />
  </div>

  <div className="n">
      <h3>{films.title}</h3>
      <span><Rating count={films.rating} /> </span>
      <p>{films.year}</p>
      <p className="pdescription">{films.description}</p>
      </div>
      </div>
      
    );
  }
}
const mapStateToProps = state => ({ films : state.MovieReducer.films, });
export default connect(mapStateToProps)(Description);