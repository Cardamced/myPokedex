import PropTypes from "prop-types";
import { useEffect } from 'react';

function PokemonCard({ pokemon }) {
    console.log(pokemon); // Affiche les propriétés reçues dans la console

    useEffect(() => {
        if (pokemon.name === 'Pikachu') {
            setTimeout(() => {
                alert("Pika Pikachu !");
            }, 500);
        }
    }, [pokemon.name]);

    return (
        <figure>
            {/* Affiche l'image si elle est disponible (et pas undefined ?) */}
            {pokemon.imgSrc === "" || pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} />}
            {/* Affiche le nom du Pokémon via la prop */}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );

}
PokemonCard.propTypes = {
    /* `pokemon: PropTypes.shape({` définit le prop `pokemon` comme un objet avec une forme ou une
    structure spécifique. Il spécifie les propriétés attendues et leurs types pour le prop
    `pokemon`. Dans ce cas, il attend le ` pokemon` doit avoir les propriétés `name`, `imgSrc` et
    `initialValue`, qui doivent toutes être de type chaîne et sont obligatoires (comme indiqué par
    `isRequired`). */
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        initialValue: PropTypes.string.isRequired,
    }).isRequired,
}

export default PokemonCard;