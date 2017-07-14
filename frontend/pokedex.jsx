import React from 'react';
import ReactDOM from 'react-dom';
import { requestAllPokemon, receiveAllPokemon, receivePokemon, requestPokemon }
  from "./actions/pokemon_actions";
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import { selectAllPokemon, selectPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  window.selectAllPokemon = selectAllPokemon;
  window.selectPokemon = selectPokemon;

  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.receivePokemon = receivePokemon;
  window.requestPokemon = requestPokemon;

  window.fetchPokemon = APIUtil.fetchPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
