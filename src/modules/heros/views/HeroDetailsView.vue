<template>
  <div class="hero">
    <div class="hero__image">
      <img :src="store.image" :alt="store.image" />
    </div>
    <div class="hero__content">
      <h1 class="hero__title">{{ store.name }}</h1>
      <p class="hero__description">{{ store.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeroStore } from '@/stores/hero'

const store = useHeroStore()
</script>

<style>
.hero {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
}

.hero__image {
  flex: 0 0 50%;
  margin-right: 20px;
}

.hero__image img {
  width: 100%;
  max-height: 600px;
  border-radius: 10px;
}

.hero__content {
  flex: 1;
}

.hero__title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero__description {
  font-size: 16px;
  line-height: 1.6;
}
</style>
