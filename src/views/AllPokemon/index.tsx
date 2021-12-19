import { useState, useEffect } from "react";
import PokemonHolder from "../../components/PokemonHolder";
import "./AllPokemon.css";

let id: number = 1;

interface Pokemon {
  name: string;
  details: string;
  image: string;
}
interface PokemonApi {
  name: string;
}

const poke: Pokemon = {
  name: "PokemonName",
  details:
    "Est excepteur do eiusmod officia consectetur velit veniam ad irure nulla consequat. Aute et ullamco ea laboris ea elit veniam esse. Culpa nulla Lorem ut est ullamco ut exercitation et occaecat sint. Mollit eu ipsum anim non ad proident incididunt incididunt exercitation cupidatat culpa laboris non. Esse sunt amet et Lorem eu est consectetur ea eiusmod ad ipsum ut laborum in.",
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
};

const dataFormatter = (obj: PokemonApi, idx: number = 1) => {
  return {
    name: obj.name,
    details:
      "Est excepteur do eiusmod officia consectetur velit veniam ad irure nulla consequat. Aute et ullamco ea laboris ea elit veniam esse. Culpa nulla Lorem ut est ullamco ut exercitation et occaecat sint. Mollit eu ipsum anim non ad proident incididunt incididunt exercitation cupidatat culpa laboris non. Esse sunt amet et Lorem eu est consectetur ea eiusmod ad ipsum ut laborum in.",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`,
  };
};

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results.map((elem: PokemonApi, idx: number) => dataFormatter(elem, idx + 1))));
    }, []);

  return (
    <div className="allPokemonPage">
      <h1 className="allPokemonPage__title">This is the all pokemon page</h1>
      <div className="allPokemonPage__grid">
        {pokemon.map((el: Pokemon, idx) => (
          <div key={idx}>
            <PokemonHolder
              name={el.name}
              details={el.details}
              image={el.image}
              count={idx}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPokemon;
