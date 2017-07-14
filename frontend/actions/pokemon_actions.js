export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

import * as APIUtil from '../util/api_util';

// Normal action creator
export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receivePokemon = (singlePokemon) => {
  return {
    type: RECEIVE_POKEMON,
    singlePokemon
  };
};

// Thunk/Functional action creator
export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPokemon = (id) => (dispatch) => {
  return APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)));
};
