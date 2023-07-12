import React from 'react'
import PokemonInfo from './PokemonInfo'

const Card = (props) => {
  return (
    <div className='pokemon-card--details'>
      <PokemonInfo {...props} />
    </div>
  )
}

export default Card
