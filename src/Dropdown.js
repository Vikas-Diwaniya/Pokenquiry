import React, { useState } from 'react'
import "./Dropdown.scss";
import Search from './Search';

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = (props) => {
  const { pokemonList, setSelectedPok, pokemonDetails, setPokemonDetails } = props

  const [selectedText, setSelectedText] = useState('Select...');
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    if (show) setShow(false)
    else setShow(true)
  }

  const optionHandlerChange = option => {
    setSelectedText(option.toUpperCase())
    setSelectedPok(option.toUpperCase())
    console.log("Option: ", option)
  }


  return (
    <div className='dropdown'>

      <div className="dropdown-container">
        <div className="dropdown-input" onClick={toggleDropdown}>
          <div className="dropdown-selected-value" >{selectedText}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon />
            </div>
          </div>
          {show &&

            <div className="dropdown-menu">

              {pokemonList.map((option) => (

                <div key={option} className="dropdown-item" onClick={() => { optionHandlerChange(option) }}>

                  {option.toUpperCase()}
                </div>
              ))
              }
            </div>
          }
        </div>
      </div>
      <Search selectedPokemon={selectedText} pokemonDetails={pokemonDetails} setPokemonDetails={setPokemonDetails} />
    </div>
  );
};

export default Dropdown;
