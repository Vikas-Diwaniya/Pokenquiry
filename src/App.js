import React, { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Headline from './headline';
import axios from 'axios';
import Card from './Card';

function App() {
  console.log('App called!')


  const [pokemon, setPokemon] = useState([])
  const apiLink = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`)

  useEffect(() => {
    apiLink.then(res => {
      setPokemon(res.data.results.map(p => p.name))
      // console.log("Pokemon Output: ", pokemon)

    })
  }, [])


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
        <Dropdown placeHolder="Select..." pokemonList={pokemon} setSelectedPok={setSelectedPok} pokemonDetails={pokemonDetails} setPokemonDetails={setPokemonDetails} />
      </div>
      <Card selectedPok={selectedPok} pokemonDetails={pokemonDetails} />
    </div>
  );
}

export default App
