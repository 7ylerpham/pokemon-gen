import React from 'react'
import HP from './HP'
import Body from './Body'
import '../Style.css'
import pic from '../images/demo.png'

function App() {
  const colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
  }
  
  const [pokemon, setPokemon] = React.useState({
    hp: 80,
    name: "espeon",
    types: {
      type1: "psychic",
      type2: "None"
    },
    stats: {
      attack: 80,
      defense: 60,
      speed: 90
    },
    imgSRC: ""
  })
  const styles = {
    background: `radial-gradient(circle at 50% 0%, ${colors[pokemon.types.type1]}, 36%, #ffffff 36%)`
  }
  
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  function getPokeData() {
      let id = Math.floor(Math.random() * 500) + 1;
      const finalURL = url + id;
      fetch(finalURL)
      .then(response => response.json())
      .then(data => generateCard(data));
  }

  function generateCard(data) {
    setPokemon({
        hp: data.stats[0].base_stat,
        name: data.name,
        types: {
          type1: data.types[0].type.name,
          type2: data.types[1] ? data.types[1].type.name : ""
        },
        stats: {
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat
        },
        imgSRC: data.sprites.other.dream_world.front_default
    })
    console.log(pokemon.imgSRC)
  }

  return (
    <div className='container'>
      <div className='box'>
        <div className='card' style={styles}>
          <HP 
            HP={pokemon.hp}
          />
          <img src={pokemon.imgSRC === "" ? pic : pokemon.imgSRC} className='pic' alt='pic'></img>
          <Body 
            name={pokemon.name}
            types={pokemon.types}
            stats={pokemon.stats}
          />
        </div>
      </div>
      <button className='btn' onClick={getPokeData}>Generate</button>
    </div>
  );
}

export default App;
