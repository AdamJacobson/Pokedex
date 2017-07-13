export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon',
    type: 'GET'
  })
);

export const fetchPokemon = (id) => (
  $.ajax({
    url: 'api/pokemon/' + id,
    type: 'GET'
  })
);
