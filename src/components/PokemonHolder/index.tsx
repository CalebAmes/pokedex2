import React from "react";
import "./PokemonHolder.css"

interface PokemonDetails {
  name: string;
  details: string;
  image: string;
}

const PokemonHolder: React.FC<PokemonDetails> = (props) => {

  const imageStyle = {
    background: `url(${props.image}) no-repeat center center`,
    role: 'img',
    ariaLabel: 'pokemon image',
    border: '2px solid black !important',
  }

  return (
    <div className="pokemonCard">
      <div className="pokemonCard__image" >
        <img src={props.image} alt="" />
      </div>
      <div className="pokemonCard__info">
        <h1 className="pokemonCard__info-name">{props.name}</h1>
        <p className="pokemonCard__info-details">{props.details}</p>
      </div>
    </div>
  );
};

export default PokemonHolder;
