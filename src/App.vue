<template>
  <v-layout class="pa-8">
    <MainMenu />

    <v-container fluid tag="main" class="pa-0">
      <RouterView />
    </v-container>
  </v-layout>
</template>

<script lang="ts" setup>
import MainMenu from './components/MainMenu.vue'
</script>

<style lang="scss">
.v-layout {
  gap: 1.5rem;
}
</style>
