import { useEffect, useState } from 'react'
import Header from './component/header'
import Card from './component/card'
import Button from './component/button'
import Search from './component/serach'
import './styles/app.css'


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(res => res.json())
    .then(data => setPokemons(data.results))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  useEffect(() => {
    if(query === '') 
      {
        setFilteredPokemons([])
        console.log(query)
      }else{
        setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(query.toLowerCase())));
        console.log(query)
      }  
    
  },[query])

  const displayPokemons = filteredPokemons.length > 0 ? filteredPokemons : pokemons;

  
  const loadMore = () =>{
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <Search setQuery={setQuery}/> 
      <div className="card-container">
      {
          (query.length === 0 || filteredPokemons.length > 0) && 
          displayPokemons.slice(0, (page + 1) * ITEMS_PER_PAGE).map((pokemon, index) => (
            <Card key={index} name={pokemon.name} url={pokemon.url} />
          ))
      }
        
      </div>
      {
          (query.length > 0 && filteredPokemons.length === 0) && 
            <p className='pokemon-not-found'>No Pokémon found with the name "{query}"</p>
        }
      {((page + 1) * ITEMS_PER_PAGE) < displayPokemons.length && (query.length === 0 || filteredPokemons.length > 0) &&(
                <div className='button-container'>
                  <Button handleClick={loadMore} className="button">
                    {isLoading ? 'Loading...' : 'Load More'}
                  </Button>
                </div>
            )}
    </>
  )
}

export default App
