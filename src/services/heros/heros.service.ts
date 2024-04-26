import { fromHeroDto, type HeroDto } from "./heros.dto";

const MARVEL_API_KEY = import.meta.env.VITE_MARVEL_API_KEY || '1b813d9206693e92d1f81cb57d130b07'
const MARVEL_HASH = import.meta.env.VITE_MARVEL_HASH || 'e43fcaa4dd7a92cda993c8a262ad517b'


export const API_URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${MARVEL_API_KEY}&hash=${MARVEL_HASH}`

async function getHeros() {
  const response = await fetch(API_URL)
  const { data } = await response.json()
  
  return data.results.map((result: HeroDto) => fromHeroDto(result))
}

export default {
  getHeros
}

