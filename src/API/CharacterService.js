import axios from 'axios'

export default class CharacterService {
  static async getCharacter(name) {
    const response = await axios.get("http://localhost:3000/" + name)
    console.log(response.data)
    return response
  }
}