import { defineStore } from 'pinia'

export interface Hero {
  name: string;
  image: string;
  description: string; 
}

export const useHeroStore = defineStore('hero', {
  state: () => ({
    name: '',
    image: '',
    description: '',
  }),
  actions: {
    setHero(hero: Hero) {
      this.name = hero.name
      this.image = hero.image
      this.description = hero.description
    },
  },
})

