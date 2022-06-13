import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

const movesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_POKEMON:
            return Object.assign( {}, action.entity.moves)
        default:
            return state;
    }
}

export default movesReducer;