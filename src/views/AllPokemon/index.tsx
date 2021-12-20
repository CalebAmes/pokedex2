import { useState, useEffect, useRef } from "react";
import PokemonHolder from "../../components/PokemonHolder";
import { fetchPokemon } from "../../utils/api";
import "./AllPokemon.css";

let id: number = 1;

interface Pokemon {
  name: string;
  details: string;
  image: string;
}

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(25);
  const grid = useRef<any>(null);
  const top = useRef<any>(null);

  const scrollTop = () => {
    top.current.scrollIntoView();
  }

  const scrollBottom = () => {
    grid.current.lastChild.scrollIntoView();
  }

  const grabPokemon = async() => {
    const data = await fetchPokemon(limit);
    setLimit(limit => limit + 25)
    setPokemon(data);

    setTimeout(scrollBottom, 2000)
  }

  useEffect(() => {
    grabPokemon()
  }, []);

  return (
    <div className="allPokemonPage">
      <h1 ref={top} className="allPokemonPage__title">all pokemon page</h1>
      <button className="allPokemonPage__button" onClick={scrollBottom}>Scroll to bottom</button>
      <div className="allPokemonPage__grid" ref={grid}>
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
      <button className="allPokemonPage__button" onClick={() => grabPokemon()}>
        More Pokemon
      </button>
      <button className="allPokemonPage__button" onClick={scrollTop}>
          Scroll to top
      </button>
    </div>
  );
};

export default AllPokemon;
