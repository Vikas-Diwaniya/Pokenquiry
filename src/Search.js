import "./Search.scss";
import axios from 'axios';



const Search = (props) => {

  const searchPokemon = () => {
    console.log("Coming from Dropdown file: ", props.selectedPokemon)

    // TODO: WHY IT IS COMING AS OBJECT AND NOT STRING
    console.log("Current Pokemon (API call): ", props.selectedPokemon.toLowerCase());
    let currentPokemon = props.selectedPokemon.toLowerCase()

    axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`).then(res => {
      console.log("Data: ", res)
      // const dataVAr = {
      //   'name': res.data.name,
      //   'height': res.data.height,
      //   'weight': res.data.weight,
      //   types: res.data.types
      // }
      // console.log("Data Obj: ", dataVAr)

      props.setPokemonDetails({
        name: res.data.name,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types,
        img: res.data.sprites.versions['generation-ii'].crystal.front_default,
      })
      // This may be because of the STATE not being updated in the function (https://www.daggala.com/react-state-not-updating-immediately/)
      // console.log('Pok Details: ', pokemonDetails)
      // console.log('Pok Details (Name): ', pokemonDetails.name)


    })
  }
  // console.log("After the function ended")
  // console.log('Pok Details: ', pokemonDetails)
  // console.log('Pok Details (Name): ', pokemonDetails.name)

  // console.log("Data Obj: ", dataVAr)



  return (
    <>
      <button className='btn' onClick={searchPokemon}>Search</button>
    </>
  )
}

export default Search
