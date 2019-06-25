import Pokemon from "../model/Pokemon.js";




let pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

let bcwApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Darryl/pokemon'
})


let _state = {
  pokemon: [],
  myPokemon: [],
  selectedPokemon: {}
}

let _subscribers = {
  pokemon: [],
  myPokemon: [],
  selectedPokemon: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

export default class PokemonService {
  get Pokemon() {
    return _state.pokemon.map(p => new Pokemon)
  }
}