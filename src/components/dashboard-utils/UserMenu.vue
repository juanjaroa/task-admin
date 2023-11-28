<template>
  <v-expansion-panels tag="aside" class="user-menu" density="compact">
    <v-expansion-panel hide-actions class="no-background" elevation="0">
      <v-expansion-panel-title class="glass-surface rounded-lg py-2 px-4 elevation-2">
        <v-avatar icon="mdi-alpha-j" image="./img/avatar.jpg" size="40"></v-avatar>
        <p>Juan Roa</p>
      </v-expansion-panel-title>

      <v-expansion-panel-text class="glass-surface rounded-lg elevation-2">
        <v-card-text :v-text="lorem"></v-card-text>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup>
const lorem = 'lorem'
</script>
<style lang="scss">
.no-background {
  background-color: transparent !important;
}

.user-menu {
  width: min-content;
  min-width: 250px;
  .v-expansion-panel-title {
    gap: 0.5rem;
    min-height: initial;
    p {
      width: max-content;
      font-weight: 600;
      margin-right: 0.25rem;
      font-size: 1rem;
    }
  }
}
.v-expansion-panel-text {
  margin-top: 0.5rem;
  position: absolute;
  width: 100%;
  top: 100%;
}
</style>
