import React from "react";

const Pokemon = (props) => {
    const { pokemon } = props;
    return (
        <div className="pokemon-card">
          <div className="pokemon-img-container">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="pokemon-img"
            />
          </div>
          <div className="card-body">
            <div className="card-top">
              #{pokemon.id} <h3>{pokemon.name}</h3>
              <div></div>
            </div>
            <div className="card-bottom">
              <div className="pokemon-type">
                {pokemon.types.map((type, idx) => {
                  return (
                    <div key={idx} className="pokemon-type-text">
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
              <div>H: {pokemon.height/10} m / W: {pokemon.weight/10} kg </div>  
            </div>
          </div>
          </div>
    );
};

export default Pokemon;