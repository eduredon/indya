<template>
  <nav>
    <RouterLink to="/">My Heros</RouterLink>
    <AppAvatar :name="user.name" :email="user.email" :src="user.image" />
  </nav>
</template>

<script setup lang="ts">
import AppAvatar from './AppAvatar.vue'

const user = {
  name: 'Eduardo Redondo',
  email: 'eduredon@gmail.com',
  image: 'https://imgur.com/BXMHaT7.jpg'
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003502;
  overflow: hidden;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 1rem;
}
</style>
