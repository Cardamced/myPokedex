const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];console.log(pokemonList[1].imgSrc)


function PokemonCard() {
    const pokemon =
        pokemonList[0];
    return (
        <>
            <figure>
                {pokemon.imgSrc === "" || pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} />}

                <figcaption>{pokemon.name}</figcaption>
            </figure>
        </>
    );
}


export default PokemonCard;