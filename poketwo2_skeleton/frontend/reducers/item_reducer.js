import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state );

    switch(action.type) {
        // case RECEIVE_ALL_POKEMON:
        //     debugger
        //     Object.assign(nextState, action.items)
        //     return nextState;
        case RECEIVE_POKEMON:
            // debugger
            nextState = action.entity.items;
            return nextState;
        default:
            return state;
    }
}

export default itemReducer;