import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  console.log(values(state.pokemon));
};
