<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        expand-on-hover
        :rail="rail"
        rounded="lg"
        rail-width="86"
        permanent
        class="plop"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="jRoa"
          nav
        >
          <template v-slot:append>
            <v-btn
              size="x-small"
              @click="toggleTheme"
              :icon="
                theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
              "
              style="margin-left: 2rem"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="(item, index) in navItems"
            :key="index"
            :title="item.title"
            :to="item.route"
            :prepend-icon="item.icon"
            color="#337AB7"
            base-color="#5D6C71"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>

  <RouterView />
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { mdiAccount } from '@mdi/js'

import { ref, computed } from 'vue'

const drawer = ref(true)
const rail = ref(true)

const navItems = [
  {
    title: 'Main',
    value: 1,
    route: '/',
    icon: 'mdi-view-dashboard-outline'
  },
  {
    title: 'Planning',
    value: 2,
    route: '/about',
    icon: 'mdi-calendar-blank-outline'
  },
  {
    title: 'People',
    value: 3,
    route: '',
    icon: 'mdi-calendar-account-outline'
  },
  {
    title: 'Register',
    value: 4,
    route: '',
    icon: 'mdi-format-list-text'
  },
  {
    title: 'Outside task',
    value: 5,
    route: '',
    icon: 'mdi-clipboard-text'
  },
  {
    title: 'Task manager',
    value: 6,
    route: '',
    icon: 'mdi-clipboard-text'
  },
  {
    title: 'Items',
    value: 7,
    route: '',
    icon: 'mdi-cart-outline'
  },
  {
    title: 'Payments',
    value: 8,
    route: '',
    icon: 'mdi-wallet-bifold-outline'
  },
  {
    title: 'Accounting',
    value: 9,
    route: '',
    icon: 'mdi-credit-card-outline'
  },
  {
    title: 'Reports',
    value: 10,
    route: '',
    icon: 'mdi-file-chart-outline'
  }
]

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
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
<style lang="scss" scoped></style>
<style lang="scss">
.v-navigation-drawer {
  height: calc(100vh - 4rem) !important;
  margin-top: 2rem;
  margin-left: 2rem;
  /* background: rgb(var(--v-theme-surface), 0.35) !important; */
  outline: 1px solid rgba(255, 255, 255, 0.05);
  outline-offset: -1px;
  background: linear-gradient(
    86deg,
    rgba(var(--v-theme-surface), 0.35) 11.14%,
    rgba(var(--v-theme-surface), 0.65) 113.29%
  ) !important;
  background-blend-mode: overlay;
  box-shadow: 0px 1.1966px 29.91505px 0px rgba(69, 42, 124, 0.1) !important;
  backdrop-filter: blur(2rem);
  .v-navigation-drawer__content {
    display: flex;
    padding: 0.75rem;
    flex-direction: column;
    justify-content: space-between;
    .v-list {
      min-height: 80%;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.75rem;

      .v-list-item {
        padding: 0.7rem;
        border-radius: 6px;
        .v-list-item-title {
          font-weight: 700;
          font-size: 1rem;
        }
        .v-list-item__spacer {
          width: 0.75rem !important;
        }
        i {
          opacity: 1;
        }
      }
    }
  }
}
</style>
