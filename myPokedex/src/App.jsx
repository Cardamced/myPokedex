import './App.css';
import MyTitle from './Components/MyTitle';
import PokemonCard from "./Components/PokemonCard"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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
