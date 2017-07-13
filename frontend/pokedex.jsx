import React from 'react';
import ReactDOM from 'react-dom';
import { requestAllPokemon, receiveAllPokemon } from "./actions/pokemon_actions";
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  window.selectAllPokemon = selectAllPokemon;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
