import PropTypes from 'prop-types';

function NavBar({ previousPokemon, nextPokemon }) {

    return (
        <>
            <div className="navBar">
                <button onClick={previousPokemon}>Précédent</button>
                <button onClick={nextPokemon}>Suivant</button>
            </div>
        </>
    );
}

NavBar.propTypes = {
    /* `pokemon: PropTypes.shape({` définit le prop `pokemon` comme un objet avec une forme ou une
    structure spécifique. Il spécifie les propriétés attendues et leurs types pour le prop
    `pokemon`. Dans ce cas, il attend le ` pokemon` doit avoir les propriétés `name`, `imgSrc` et
    `initialValue`, qui doivent toutes être de type chaîne et sont obligatoires (comme indiqué par
    `isRequired`). */
    nextPokemon: PropTypes.func.isRequired,
    previousPokemon: PropTypes.func.isRequired,
};


export default NavBar;