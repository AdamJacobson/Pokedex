import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    return(
      <ul>
        {this.props.pokemon.map((poke) => {
          return (
            <li key={poke.id}>
              {poke.name}
              <img style={{width: '100px'}} src={poke.image_url}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PokemonIndex;
