<template>
  <v-layout class="pa-8">
    <MainMenu />

    <v-container fluid tag="main" class="pa-0 d-flex flex-column">
      <RouterView />
    </v-container>
  </v-layout>
</template>

<script setup>
import MainMenu from './components/MainMenu.vue'
</script>

<style lang="scss">
.v-layout,
main {
  gap: 2rem;
}
</style>
