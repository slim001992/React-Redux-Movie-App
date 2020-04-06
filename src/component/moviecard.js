import React from "react";
import {connect} from "react-redux"
import Rating from './rating';
import Edit from './edit';
import { Link } from "react-router-dom";
import { deleteTask  } from "../js/actions/actions";
const MovieCard = ( {deleteTask,e},props ) => {
  return (

    <div className="flip-card col-md-2">
      
      <div className="flip-card-inner">

        <div className="flip-card-front">
    
          <div className="movie-image" style={{ backgroundImage: `url('${e.image ? e.image : "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"}')` }} />
        </div>
        <div className="flip-card-back">
      
          <h3>{e.title}</h3>
          <span><Rating count={e.rating} /> </span>
          <p>{e.year}</p>
          <div className="cardbtn">
          <Link  tex={props.title} to={`/description/${e.id}`}>Description</Link>
          <Edit MovieEl={e} />
          <button type="button" className="btn btn-primary"  onClick={() => {deleteTask(e.id)}} >Delete</button>
    
          </div>
        </div>
      </div>
    </div>

  )};
export default connect(null, {deleteTask})(MovieCard);