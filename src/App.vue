<template>
  <v-layout>
    <MainMenu />
    <v-container tag="main">
      <RouterView />
    </v-container>
  </v-layout>
</template>

<script lang="ts" setup>
import MainMenu from './components/MainMenu.vue'
</script>

<style lang="scss">
.my-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1rem;
}
</style>
