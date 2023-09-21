import './App.css';
import MyTitle from './Components/MyTitle';
import NavBar from './Components/NavBar';
import PokemonCard from "./Components/PokemonCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  /* `const [pokemonIndex, setPokemonIndex] = useState(0);` utilise le hook `useState` de React pour
  créer une variable d'état appelée `pokemonIndex` et une fonction de définition correspondante
  appelée `setPokemonIndex`. La valeur initiale de `pokemonIndex` est définie sur 0. */
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  const previousPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  }

  /* La ligne `const pokemonToDisplay = pokemonList[pokemonIndex];` attribue la valeur de
  `pokemonList[pokemonIndex]` à la variable `pokemonToDisplay`. */
  const pokemonToDisplay = pokemonList[pokemonIndex];

  return (
    <>
      <div>
        <MyTitle />
        <PokemonCard pokemon={pokemonToDisplay} />
        <NavBar
          nextPokemon={nextPokemon}
          previousPokemon={previousPokemon}
        />
      </div >
    </>
  );
}

export default App;
