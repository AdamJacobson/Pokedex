import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON }
  from '../actions/pokemon_actions';

const defaultState = { entities: {}, currentPoke: null };

const pokemonReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type)
  {
    case RECEIVE_ALL_POKEMON:
      newState = Object.assign({}, {entities: action.pokemon}, {currentPoke: state.currentPoke});
      return newState;
    case RECEIVE_POKEMON:
      newState = Object.assign({}, state);
      // debugger
      let id = action.singlePokemon.poke.id;
      newState.currentPoke = id;
      newState.entities[id] = action.singlePokemon.poke;
      // debugger
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
