import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './rating';

function Navbar (props) {
    return (
        <nav className="navbar">
          <form className="form-inline">
            <input className="form-control mr-sm-2" onChange={e => props.handleSearch(e.target.value)} name="search"  placeholder="Search" aria-label="Search" />
          </form>
          <div className="rate">
          <h5 >Rate</h5>
        <Rating count={props.minRating} getRate={props.handleRating} />
        </div>
        </nav>
    )
  
}
export default Navbar;