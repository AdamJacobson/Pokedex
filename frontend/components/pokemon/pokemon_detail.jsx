import React from 'react';

class PokemonDetail extends React.Component {
  componentWillReceiveProps(newProps){
    if (!this.props.pokemon || (newProps.match.params.pokemonId != this.props.pokemon.id)) {
      newProps.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  render() {
    if (!this.props.pokemon) {
      return null;
    }
    return (
      <div className="pokemon-detail">
        <ul>
          <img src={this.props.pokemon.image_url}/>
          <li>{this.props.pokemon.name}</li>
          <li>Type: {this.props.pokemon.poke_type}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Moves: {this.props.pokemon.moves.join(', ')}</li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
