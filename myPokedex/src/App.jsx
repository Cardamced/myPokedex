import './App.css';
import MyTitle from './Components/MyTitle';
import NavBar from './Components/NavBar';
import PokemonCard from "./Components/PokemonCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, /*useEffect*/ } from 'react';


const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
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
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // function handlePokemonClick(newIndex) {
  //   setPokemonIndex(newIndex);
  // }

  const handlePokemonClick = (newIndex) => {
      setPokemonIndex(newIndex);
}

  const pokemonToDisplay = pokemonList[pokemonIndex];

  return (
    <>
      <div>
        <MyTitle />
        <PokemonCard pokemon={pokemonToDisplay} />
        <NavBar
          pokemonIndex={pokemonIndex}
          pokemonList={pokemonList} // Ajoutez la liste de Pokémon ici
          handlePokemonClick={handlePokemonClick}
        />
      </div>
    </>
  );
}

export default App;