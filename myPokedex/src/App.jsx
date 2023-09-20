import './App.css';
import MyTitle from './Components/MyTitle';
import PokemonCard from "./Components/PokemonCard"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  console.log(pokemonList[1].imgSrc)
  const pokemonToDisplay = pokemonList[0];
  return (
    <div>
      <MyTitle/>
      <PokemonCard pokemon={pokemonToDisplay} />
    </div>
  )
}

export default App;
