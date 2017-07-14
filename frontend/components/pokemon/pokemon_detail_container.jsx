import React from 'react';
import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  return {
    pokemon: selectPokemon(state, state.pokemon.currentPoke)
  };
};

//mapDispatch to props is just a shortcut for dispatch whatever
const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

const PokemonDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);

export default PokemonDetailContainer;
