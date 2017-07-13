import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from "./actions/pokemon_actions";
import * as APIUtil from './util/api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
