import PokemonController from "./components/pokemonController.js"

class App {
  constructor() {
    this.contorllers = {
      pokemonController: new PokemonController()
    }
  }
}

window['app'] = new App()