import { useEffect, useState } from 'react';
import '../styles/card.css'

const Card = ({name, url}) =>{

    const colors = [{
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    }]

    const [image, setImage] = useState('')
    const [types, setTypes] = useState([])

    useEffect(() =>{

        fetch(url)
        .then(res => res.json())
        .then(data => {
            const newImage = data.sprites.other['official-artwork'].front_default;
            setImage(newImage);

            const newTypes = data.types;
            setTypes(newTypes);
        })
    },[])

    return (
        <button className="card"
            style={{
                borderColor: colors[0][types[0].type.name]
            }}
        >
            <img src={image} alt='pokemon image' className='pokemon-image'/>
            <p>{name}</p>
            <div className='types'>
            {
                types.map((type, index) =>(
                    <p key={index} className='type'
                        style={{
                            backgroundColor: colors[0][type.type.name]
                        
                        }}
                    >{type.type.name}</p>
                ))
            }
            </div>
        </button>
    )
}

export default Card;