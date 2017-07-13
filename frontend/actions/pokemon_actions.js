export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

import * as APIUtil from '../util/api_util';

// Normal action creator
export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

// Functional action creator
export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

// APIUtil.fetchAllPokemon().then((data) => dispatch(receiveAllPokemon(data)));
