import { useEffect, useState } from 'react'
import Menu from './component/menu'
import Card from './component/card'
import './styles/app.css'


function App() {
  const [pokemons, setPokemons] = useState([])  

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(res => res.json())
    .then(data => setPokemons(data.results))
  }, [])

  return (
    <>
      <Menu />
      <div className="card-container">
        {
          pokemons.map((pokemon, index) => (
            <Card key={index} name={pokemon.name} url={pokemon.url} />
          ))
        }
      </div>
    </>
  )
}

export default App
