<template>
  <div class="profile">
    <div class="avatar">
      <img v-if="src" class="avatar-img" alt="avatar" :src="src" />
    </div>
    <div class="credentials">
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface AvatarProps {
  src: string
  name: string
  email: string
}

defineProps<AvatarProps>()
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
}

.avatar {
  margin-right: 1rem;
}

.avatar img {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
}

.credentials {
  color: #f2f0f0;
  font-size: 0.8rem;
}

.credentials p:first-child {
  font-size: 1rem;
}
</style>
