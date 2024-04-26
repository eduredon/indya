<template>
  <main>
    <div v-if="loading">loading...</div>
    <div v-if="error">Ha ocurrido un error inesperado...</div>
    <template v-else v-for="hero in heros" :key="hero.name">
      <AppCard
        :name="hero.name"
        :description="hero.description"
        :image="hero.image"
        @click="goToHeroDetails(hero)"
      />
    </template>
  </main>
</template>
<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { ref } from 'vue'
import AppCard from '@/components/AppCard.vue'
import { useRouter } from 'vue-router'
import { useHeroStore, type Hero } from '@/stores/hero'
import api from '@/services'

const router = useRouter()
const { load, error, loading } = useFetch()
const heros = ref()
const store = useHeroStore()

function goToHeroDetails(hero: Hero) {
  store.setHero(hero)
  router.push({
    name: 'hero'
  })
}

async function fetchData() {
  heros.value = await load(api.heros.getHeros)
}

fetchData()
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
