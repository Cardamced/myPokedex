import PokemonCard from "./Components/PokemonCard"

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
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
      <PokemonCard pokemon={pokemonToDisplay} />
    </div>
  )
}

export default App;
