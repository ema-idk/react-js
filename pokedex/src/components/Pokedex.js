import React from 'react';
import Pokemon from './Pokemon';
import Paginacion from './Paginacion';

const Pokedex = (props) => {
    const {pokemons, page, setPage, total, loading} = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };

    return (
        <div>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, idx) => {
                        return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                })}
                </div>
            )}
            <div className='header'>
                <Paginacion
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
        </div>
    );
};

export default Pokedex;