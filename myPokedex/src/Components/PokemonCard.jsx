import PropTypes from "prop-types";


function PokemonCard(props) {
    console.log(props); // Affiche les propriétés reçues dans la console
    const { pokemon } = props; // déstructure la prop pokemon

    return (
        <figure>
            {props.title}
            {/* Affiche l'image si elle est disponible (et pas undefined ?) */}
            {pokemon.imgSrc === "" || pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} />}
            {/* Affiche le nom du Pokémon via la prop */}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );

}
PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
}

export default PokemonCard;