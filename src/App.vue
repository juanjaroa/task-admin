<template>
  <v-layout>
    <v-container tag="main" fluid>
      <v-row>
        <v-col cols="12" sm="2" md="1">
          <MainMenu />
        </v-col>
        <v-col cols="12" sm="10" md="11">
          <RouterView />
        </v-col>
      </v-row>
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
