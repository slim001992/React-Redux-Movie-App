import {ADD_TASK, DELETE_TASK, EDIT_TASK} from "../constants/actions-types"
import {films} from "../../component/data"
const initialState = {films}
const MovieReducer = (state = initialState,  { type, payload, id, payloadIndex }) => {
    switch (type) {
        case ADD_TASK:
            return  {...state,
            films: [...state.films, payload ] }

        case DELETE_TASK:
            return {
                ...state,
               films: state.films.filter(el => el.id !== id)
            };
            
        case EDIT_TASK:
            return {
                ...state,films: state.films.map(el => el.id === payloadIndex? payload : el)
                
              };

        default:
            return state
    }


}
export default MovieReducer