<template>
  <div class="card" @click="emit('click', $event)">
    <div class="card__image">
      <img :src="image" :alt="image" />
    </div>
    <div class="card__content">
      <h2 class="card__title">{{ name }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
type CardEmits = (event: 'click', value: Event) => void

const emit = defineEmits<CardEmits>()

defineProps({
  image: String,
  name: String,
  description: String
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.card__image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__content {
  padding: 20px;
}

.card__title {
  font-size: 20px;
  margin-bottom: 10px;
}

.card__description {
  font-size: 16px;
  line-height: 1.5;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
