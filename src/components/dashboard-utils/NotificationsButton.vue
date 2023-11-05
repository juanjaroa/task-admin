<template>
  <v-btn stacked size="x-small" class="notification-button glass-surface" elevation="2">
    <v-badge content="2" color="primary" floating max="9">
      <v-icon size="x-large" icon="mdi-bell-outline"></v-icon>
    </v-badge>
  </v-btn>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.notification-button {
  border-radius: 100%;
  .v-badge__badge {
  }
}
</style>
