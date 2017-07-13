import React from 'react';
import { Link } from 'react-router-dom';

const pokemonIndexItem = ({ poke: { id, name, image_url } }) => {
  return (
    <li>
      <Link to={`/pokemon/${id}`}>
        {name}
        <img style={{width: '100px'}} src={image_url}/>
      </Link>
    </li>
  );
};

export default pokemonIndexItem;
