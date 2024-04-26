<template>
  <AppBar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
</script>
