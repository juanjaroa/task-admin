<template>
  <div class="basic-card" :class="{ dark: props.dark }">
    <div class="content"></div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  dark: Boolean,
  text: String
})
</script>
<style lang="scss" scoped>
$bgColor: red;
.basic-card {
  position: relative;
  min-height: 75vh;
  min-width: 300px;
  max-width: 600px;

  aspect-ratio: 2/3;
  border-radius: 1.5rem;
  outline: 3px solid rgba(255, 255, 255, 0.05);
  outline-offset: -3px;
  background: linear-gradient(
    86deg,
    rgba(var(--v-theme-surface), 0.25) 11.14%,
    rgba(var(--v-theme-surface), 0.5) 113.29%
  );
  background-blend-mode: overlay;
  box-shadow: 0px 1.1966px 29.91505px 0px rgba(69, 42, 124, 0.1);
  backdrop-filter: blur(2rem);
  &.dark {
    outline-color: rgba(52, 67, 71, 0.075);
    background: linear-gradient(181deg, rgba(0, 0, 0, 0.25) 11.4%, rgba(0, 0, 0, 0.5) 113.29%);
  }
  @media (max-width: 320px) {
    min-width: initial;
    width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
