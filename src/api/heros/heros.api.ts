import { fromHeroDto, type HeroDto } from "./heros.dto";

export const API_URL = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1b813d9206693e92d1f81cb57d130b07&hash=e43fcaa4dd7a92cda993c8a262ad517b'

async function getHeros() {
  const response = await fetch(API_URL)
  const { data } = await response.json()
  
  return data.results.map((result: HeroDto) => fromHeroDto(result))
}

export default {
  getHeros
}

