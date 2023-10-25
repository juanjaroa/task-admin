<template>
  <v-layout class="pa-8">
    <MainMenu />

    <RouterView />
  </v-layout>
</template>

<script lang="ts" setup>
import MainMenu from './components/MainMenu.vue'
</script>

<style lang="scss">
.v-layout {
  gap: 2rem;
}
</style>
