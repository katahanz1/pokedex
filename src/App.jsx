import { useEffect, useState } from 'react'
import Header from './component/header'
import Card from './component/card'
import Button from './component/button'
import './styles/app.css'


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(res => res.json())
    .then(data => setPokemons(data.results))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  const loadMore = () =>{
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <div className="card-container">
                {pokemons.slice(0, (page + 1) * ITEMS_PER_PAGE).map((pokemon, index) => (
                    <Card key={index} name={pokemon.name} url={pokemon.url} />
                ))}
      </div>
      {((page + 1) * ITEMS_PER_PAGE) < pokemons.length && (
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
