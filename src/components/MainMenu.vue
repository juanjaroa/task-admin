<template>
  <v-navigation-drawer
    :model-value="drawer"
    expand-on-hover
    :rail="rail"
    rounded="rem"
    rail-width="86"
    permanent
    class="glass-surface"
    :elevation="rail ? 12 : 1"
    tag="menu"
    width="350"
  >
    <HeaderMenu />
    <v-divider></v-divider>
    <NavigationMenu />
    <FooterMenu @switch-pined="rail = !rail" :toggle-pin="rail" />
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { useDisplay } from 'vuetify'

import HeaderMenu from './menu-utils/HeaderMenu.vue'
import FooterMenu from './menu-utils/FooterMenu.vue'
import NavigationMenu from './menu-utils/NavigationMenu.vue'

const { mobile } = useDisplay()

const drawer = ref(true)
const rail = ref(true)
</script>
<style lang="scss">
.v-navigation-drawer {
  min-height: calc(100vh - 4rem) !important;
  position: sticky !important;
  top: 2rem !important;
  &:not(.v-navigation-drawer--rail) {
    backdrop-filter: blur(0.5rem);
  }
  .v-navigation-drawer__content {
    display: flex;
    padding: 0.75rem;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 2rem;
  }
}
</style>
