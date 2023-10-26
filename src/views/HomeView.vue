<script setup lang="ts"></script>

<template>
  <v-row v-for="myTheme in myThemes" :key="myTheme">
    <v-col cols="4">
      <v-theme-provider :theme="myTheme" with-background class="glass-surface rounded-rem pa-8">
        <h2>Solid {{ myTheme }} theme</h2>
        <div
          v-for="color in myColors"
          :key="color"
          class="d-flex aling-stretch justify-space-between mb-2"
        >
          <div>
            <h3 :class="'text-' + color" class="font-weight-normal">{{ color }}</h3>
          </div>
          <div class="w-50 rounded-lg pa-5" :class="'bg-' + color"></div>
        </div>
      </v-theme-provider>
    </v-col>
    <v-col cols="4">
      <v-theme-provider :theme="myTheme" with-background class="glass-surface rounded-rem pa-8">
        <h2>Glass {{ myTheme }} theme</h2>
        <div
          v-for="color in myColors"
          :key="color"
          class="d-flex aling-stretch justify-space-between mb-2"
        >
          <div>
            <h3 :class="'text-' + color" class="font-weight-normal">{{ color }}</h3>
          </div>
          <div class="w-50 rounded-lg bg-glass pa-5" :class="'bg-' + color"></div>
        </div>
      </v-theme-provider>
    </v-col>
    <v-col cols="4">
      <v-theme-provider :theme="myTheme" with-background class="glass-surface rounded-rem pa-8">
        <h2>Sweet glass {{ myTheme }} theme</h2>
        <div
          v-for="color in myColors"
          :key="color"
          class="d-flex aling-stretch justify-space-between mb-2"
        >
          <div>
            <h3 :class="'text-' + color" class="font-weight-normal">{{ color }}</h3>
          </div>
          <div class="w-50 rounded-lg bg-glass pa-5 sweet-glass" :class="'bg-' + color"></div>
        </div>
      </v-theme-provider>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
let myThemes: string[] = ['light', 'dark']
let myColors: string[] = [
  'background',
  'surface',
  'on-surface',
  'on-surface-variant',
  'onsurface-v',
  'primary',
  'secondary',
  'accent',
  'success',
  'info',
  'warning',
  'error',

  'surface-variant'
]
</script>
<style scoped lang="scss">
.v-container {
  min-height: 100%;
  /* border: 1px solid rgba(var(--v-theme-surface), 0.2);
  border-radius: 0.5rem; */
}
.on-surface {
  background-color: rgba(var(--v-theme-on-surface), 1);
}
</style>
