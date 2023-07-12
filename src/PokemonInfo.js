import React from 'react'
import "./PokemonInfo.scss"
import pikachuImg from "./img/pikachu-1.jpg";

const PokemonInfo = (props) => {
  return (
    <div>
      {
        // props.pokemonDetails.name &&
        props.pokemonDetails.name ? (



          <div div className="pokemon-details">
            <div className='pokemon-details--img'>

              <img src={props.pokemonDetails.img} alt="Pokemon" />
            </div>
            <div>
              <div className="pokemon-details--text">

                <div className='pokemon-details--name'>

                  <p className='pokemon-details--label'>Name</p>
                  <p className='pokemon-details--name_value'>{props.pokemonDetails.name.toUpperCase()}</p>
                </div>
                <div className='pokemon-details--height'>

                  <p className='pokemon-details--label'>Height (inches)</p>
                  <p className='pokemon-details--height'>{props.pokemonDetails.height}</p>
                </div>
                <div className='pokemon-details--weight'>

                  <p className='pokemon-details--label'>Weight (kgs.)</p>
                  <p className='pokemon-details--weight_value'>{props.pokemonDetails.weight}</p>
                </div>



              </div>

              <p className='pokemon-type--heading'>Type</p>
              <div className="pokemon-type--container">
                {props.pokemonDetails?.types && (props.pokemonDetails.types.map(type => (

                  <li className={`type-pokemon ${type.type.name}`} key={type.type.name} > {type.type.name}</li>
                )

                )

                )}
              </div>
            </div>


          </div>
        ) : (
          // We have to use another component over here which will have a image coming by DEAFULT
          <div className="placeholder-img" >
            <img src={pikachuImg} alt="Pikachu Image" className='img-content' />
          </div>
        )

      }

    </div >
  )
}

export default PokemonInfo
