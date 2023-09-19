
// function PokemonCard(props) {
//     console.log(props);
//     const { pokemon } = props;
//     return (
//         <>
//             <figure>
//                 {pokemon.imgSrc === "" || pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} />}

//                 <figcaption>{Pokemon.name}</figcaption>
//             </figure>
//         </>
//     );
// }


// export default PokemonCard;


function PokemonCard(props) {
    console.log(props); // Affiche les propriétés reçues dans la console
    const { pokemon } = props; // déstructure la prop pokemon
  
    return (
      <figure>
        {/* Affiche l'image si elle est disponible (et pas undefined ?) */}
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
  
        {/* Affiche le nom du Pokémon via la prop */}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
  
  export default PokemonCard;