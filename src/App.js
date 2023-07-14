import React, { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Headline from './headline';
import axios from 'axios';
import Card from './Card';

function App() {
  console.log('App called!')

  const [pokemon, setPokemon] = useState([])    // Used to render the POKEMON list


  const getAPIdata = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`).then(res => {
      setPokemon(res.data.results.map(p => p.name))
    })
  }

  useEffect(() => {
    getAPIdata()
  }, [])

  // useEffect(() => {
  //   const apiLink = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
  //   apiLink.then(res => {
  //     setPokemon(res.data.results.map(p => p.name))
  //     // console.log("Pokemon Output: ", pokemon)
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


  const [selectedPok, setSelectedPok] = useState("");

  const [pokemonDetails, setPokemonDetails] = useState({
    name: "",
    height: "",
    weight: ""
  });


  // const options = [
  //   {
  //     value: 'green', label: "Green"
  //   },
  //   {
  //     value: 'red', label: "Red"
  //   },
  //   {
  //     value: 'yellow', label: "Yellow"
  //   },
  //   {
  //     value: 'blue', label: "Blue"
  //   },
  //   {
  //     value: 'black', label: "Black"
  //   },
  //   {
  //     value: 'olive', label: "Olive"
  //   },
  //   {
  //     value: 'pink', label: "Pink"
  //   },
  //   {
  //     value: 'grey', label: "Grey"
  //   }
  // ]

  return (
    <div className="app">
      <div className="top-container">

        <Headline />
        <Dropdown pokemonList={pokemon} setSelectedPok={setSelectedPok} pokemonDetails={pokemonDetails} setPokemonDetails={setPokemonDetails} />
      </div>
      <Card pokemonDetails={pokemonDetails} selectedPok={selectedPok} />
    </div>
  );
}



export default App;
