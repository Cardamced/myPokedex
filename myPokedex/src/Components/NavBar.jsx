import PropTypes from 'prop-types';


function NavBar({ pokemonList, handlePokemonClick }) {

    return (
        <div className="navBar">
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handlePokemonClick(index)}>
                    {pokemon.name}
                </button>
            ))}

        </div>
    );
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    handlePokemonClick: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    })).isRequired,
};

export default NavBar;