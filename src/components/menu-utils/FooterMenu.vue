<template lang="">
  <footer class="d-flex" style="min-width: 8rem">
    <v-btn
      variant="text"
      size="small"
      :icon="togglePin ? 'mdi-pin-outline' : 'mdi-pin'"
      class="ml-auto"
      :class="[rail ? 'text-disabled' : 'text-medium-emphasis']"
      @click="$emit('switch-pined')"
      v-if="!mobile"
    ></v-btn>
  </footer>
</template>
<script lang="ts" setup>
defineProps<{
  togglePin: boolean
}>()
</script>
<style lang=""></style>
