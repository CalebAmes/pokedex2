import { useState, useEffect } from "react";
import PokemonHolder from "../../components/PokemonHolder";
import { fetchPokemon } from "../../utils/api";
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
  const [limit, setLimit] = useState(25);

  const grabPokemon = async() => {
    const data = await fetchPokemon(limit);
    setLimit(limit => limit + 25)
    setPokemon(data);
  }

  useEffect(() => {
    grabPokemon()
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
              count={idx % 25}
            />
          </div>
        ))}
      </div>
      <button className="allPokemonPage__morePokemon" onClick={() => grabPokemon()}>
        More Pokemon
      </button>
    </div>
  );
};

export default AllPokemon;
