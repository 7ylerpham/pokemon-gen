import React from 'react'
// import Button from './Button'
import HP from './HP'
import Body from './Body'
import '../Style.css'

function App() {
  const colors = {
    bug: "#25de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#ff0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#efb5449",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190ff"
  }
  
  const [pokemon, setPokemon] = React.useState({
    hp: 85,
    name: "Espeon",
    types: {
      type1: "psychic",
      type2: "None"
    },
    stats: {
      attack: 90,
      defense: 60,
      speed: 100
    },
    imgSRC: '../images/demo.png'
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
    console.log(data)
    setPokemon({
        hp: data.stats[0].base_stat,
        name: data.name,
        types: {
          type1: data.types[0].type.name,
          type2: data.types[1] ? data.types[1].type.name : "None"
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
          <img src={pokemon.imgSRC} className='pic' alt='pic'></img>
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
