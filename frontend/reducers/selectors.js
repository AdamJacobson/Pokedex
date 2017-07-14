import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.pokemon.entities);
};

export const selectPokemon = (state, id) => {
  return state.pokemon.entities[id];
};
