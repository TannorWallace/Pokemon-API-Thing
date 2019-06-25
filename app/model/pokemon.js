export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.image = data.img || data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.user = data.user
    this._id = data._id
  }
}