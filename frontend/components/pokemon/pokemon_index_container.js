import React from 'react';
import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});
//mapDispatch to props is just a shortcut for dispatch whatever
const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

const PokemonIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);

export default PokemonIndexContainer;
