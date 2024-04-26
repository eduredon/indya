<template>
  <nav>
    <RouterLink to="/">My Heros</RouterLink>
    <AppAvatar :name="user.name" :email="user.email" :src="user.image" />
  </nav>
</template>

<script setup lang="ts">
import AppAvatar from './AppAvatar.vue'
import AvatarImage from '@/assets/avatar.jpeg'

const user = {
  name: 'Eduardo Redondo',
  email: 'eduredon@gmail.com',
  image: AvatarImage
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
