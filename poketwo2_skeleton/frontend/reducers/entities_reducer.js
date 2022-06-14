import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemReducer from './item_reducer';
import movesReducer from './move_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemReducer, 
  moves: movesReducer
})

export default entitiesReducer;