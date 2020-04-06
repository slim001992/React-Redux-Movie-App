import React, { Component } from "react";
import { connect } from 'react-redux';
import MovieList from "./movieList";
import Navbar from "./Navbar";

class MovieApp extends Component {
    state = {
        minRating: 1,
        search: "",
    };
    handleRating = rating => this.setState({ minRating: rating });
    handleSearch = valeur => this.setState({ search: valeur });
    render() {
     const filtered =  this.props.films.filter(movie => movie.title.toLowerCase().includes(this.state.search.toLowerCase().trim()) && movie.rating >= this.state.minRating)
        return (
            <div className='container'>
                <Navbar handleSearch={this.handleSearch} minRating={this.state.minRating} handleRating={this.handleRating} />
                <MovieList films={filtered} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ films : state.MovieReducer.films, });
export default connect(mapStateToProps)(MovieApp);