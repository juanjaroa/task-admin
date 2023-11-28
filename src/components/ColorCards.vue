<template>
  <v-row v-for="myTheme in myThemes" :key="myTheme">
    <v-col cols="12" md="4">
      <v-theme-provider :theme="myTheme" with-background class="glass-surface rounded-rem pa-8">
        <h3 class="mb-4 font-weight-bold">Solid {{ myTheme }} theme</h3>
        <div
          v-for="color in myColors"
          :key="color"
          class="d-flex align-center flex-wrap justify-space-between mb-2"
        >
          <p :class="'text-' + color" class="font-weight-medium px-2">{{ color }}</p>

          <div
            class="w-100 rounded-inside px-2 py-1"
            :class="'bg-' + color"
            :style="{ 'background-color': 'rgb(var(--v-theme-' + color + ')) !important' }"
          >
            <p>{{ color }}</p>
          </div>
        </div>
      </v-theme-provider>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-theme-provider :theme="myTheme" with-background class="glass-surface rounded-rem pa-8">
        <h3 class="mb-4 font-weight-bold">Glass {{ myTheme }} theme</h3>
        <div
          v-for="color in myColors"
          :key="color"
          class="d-flex align-center flex-wrap justify-space-between mb-2"
        >
          <p :class="'text-' + color" class="font-weight-medium px-2">{{ color }}</p>

          <div class="d-flex w-100 px-2 py-1" style="position: relative">
            <div
              :class="'bg-' + color"
              class="rounded-inside bg-glass"
              :style="{ 'background-color': 'rgb(var(--v-theme-' + color + ')) !important' }"
              style="position: absolute; inset: 0"
            ></div>
            <p>{{ color }}</p>
          </div>
        </div>
      </v-theme-provider>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-theme-provider :theme="myTheme" with-background class="glass-surface rounded-rem pa-8">
        <h3 class="mb-4 font-weight-bold">Sweet glass {{ myTheme }} theme</h3>
        <div
          v-for="color in myColors"
          :key="color"
          class="d-flex align-center flex-wrap justify-space-between mb-2"
        >
          <p :class="'text-' + color" class="font-weight-medium px-2">{{ color }}</p>

          <div
            class="w-100 rounded-inside bg-glass px-2 py-1 sweet-glass"
            :class="'bg-' + color"
            :style="{ 'background-color': 'rgb(var(--v-theme-' + color + ')) !important' }"
          >
            <p>{{ color }}</p>
          </div>
        </div>
      </v-theme-provider>
    </v-col>
  </v-row>
</template>

<script setup>
const myThemes = ['light', 'dark']
const myColors = [
  'background',
  'surface',
  'surface-variant',
  'on-surface',
  'on-surface-variant',
  'onsurface-v',
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error'
]
</script>

<style scoped lang="scss">
.on-surface {
  background-color: rgba(var(--v-theme-on-surface), 1);
}
.min-w-200 {
  min-width: 100px;
}
</style>
