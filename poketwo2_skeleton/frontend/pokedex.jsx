import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as APIUtil from "./util/api_util"
import { receivePokemon, requestSinglePokemon, requestAllPokemon } from "./actions/pokemon_actions"

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  window.receivePokemon = receivePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.fetchPokemon = APIUtil.fetchPokemon;
  window.requestAllPokemon = requestAllPokemon;

  // requestSinglePokemon(5)(store.dispatch) // testing in console

  ReactDOM.render(<Root store={store} />, rootEl)
})