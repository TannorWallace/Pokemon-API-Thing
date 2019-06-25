import PokemonController from "./components/PokemonController.js"

class App {
  constructor() {
    this.contorllers = {
      pokemonController: new PokemonController()
    }
  }
}

window['app'] = new App()