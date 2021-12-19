import PokemonHolder from "../../components/PokemonHolder";
import "./AllPokemon.css";

const id:number = 2

interface Pokemon {
  name: string,
  details: string,
  image: string,
}

const poke: Pokemon = {
  name: "PokemonName",
  details:
    "Est excepteur do eiusmod officia consectetur velit veniam ad irure nulla consequat. Aute et ullamco ea laboris ea elit veniam esse. Culpa nulla Lorem ut est ullamco ut exercitation et occaecat sint. Mollit eu ipsum anim non ad proident incididunt incididunt exercitation cupidatat culpa laboris non. Esse sunt amet et Lorem eu est consectetur ea eiusmod ad ipsum ut laborum in.",
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
};

const AllPokemon = () => {
  return (
    <div className="allPokemonPage">
      <h1>This is the all pokemon page</h1>
      <PokemonHolder name={poke.name} details={poke.details} image={poke.image} />
    </div>
  );
};

export default AllPokemon;
