<template>
  <v-navigation-drawer
    v-model="drawer"
    expand-on-hover
    :rail="rail"
    rounded="rem"
    rail-width="86"
    permanent
    class="glass-surface"
    :elevation="rail ? 12 : 0"
    tag="header"
    width="350"
  >
    <v-list-item prepend-avatar="/img/avatar.jpg" title="jRoa" class="profile-item" nav>
      <template v-slot:append>
        <v-switch
          v-model="isDarkMode"
          color="primary"
          inset
          persistent-hint
          @click="toggleTheme"
          false-icon="mdi-weather-sunny"
          true-icon="mdi-weather-night"
          class="ml-16 toggle-theme"
        ></v-switch>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" class="menu-items" nav tag="nav">
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        :title="item.title"
        :to="item.route"
        :prepend-icon="item.icon"
        :color="isDarkMode ? 'on-surface' : 'primary'"
        :base-color="isDarkMode ? 'onsurface-v' : ''"
      >
        <v-overlay
          v-if="item.subMenu"
          activator="parent"
          location-strategy="connected"
          scroll-strategy="reposition"
          close-on-content-click
        >
          <v-list class="glass-surface" nav>
            <v-list-item
              v-for="(subItem, index) in item.subMenu"
              :key="index"
              :title="subItem.subItem"
              :to="subItem.route"
              class="px-4 py-2"
              :color="isDarkMode ? '#FFFFFF' : '#337AB7'"
              :base-color="isDarkMode ? '#B4C9CF' : '#3b3638'"
              prepend-icon="mdi-paperclip"
            ></v-list-item>
          </v-list>
        </v-overlay>
      </v-list-item>
    </v-list>
    <footer class="d-flex" style="min-width: 8rem">
      <v-btn
        variant="text"
        size="small"
        :icon="rail ? 'mdi-pin-outline' : 'mdi-pin'"
        class="ml-auto"
        :class="[rail ? 'text-disabled' : 'text-medium-emphasis']"
        @click="rail = !rail"
      ></v-btn>
    </footer>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { mdiAccount } from '@mdi/js'

import { ref, onMounted, computed } from 'vue'

const drawer = ref(true)
const rail = ref(true)

const navItems = [
  {
    title: 'Main',
    value: 1,
    route: '/',
    icon: 'mdi-view-dashboard-outline',
    subMenu: false
  },
  {
    title: 'Planning',
    value: 2,
    route: '/about',
    icon: 'mdi-calendar-blank-outline',
    subMenu: false
  },
  {
    title: 'People',
    value: 3,
    route: '',
    icon: 'mdi-calendar-account-outline',
    subMenu: [
      {
        subItem: 'Sub item 1',
        route: '/',
        icon: 'mdi-view-dashboard-outline'
      },
      {
        subItem: 'Sub item 2',
        route: '#',
        icon: 'mdi-view-dashboard-outline'
      }
    ]
  },
  {
    title: 'Register',
    value: 4,
    route: '',
    icon: 'mdi-format-list-text'
  },
  {
    title: 'Task manager',
    value: 5,
    route: '',
    icon: 'mdi-clipboard-text'
  },
  {
    title: 'Accounting',
    value: 6,
    route: '',
    icon: 'mdi-card-account-details-star-outline'
  },
  {
    title: 'Reports',
    value: 7,
    route: '',
    icon: 'mdi-file-chart-outline'
  }
]

let isDarkMode = computed(() => {
  return theme.global.current.value.dark
})

onMounted(() => {
  const themeName = localStorage.getItem('theme_name')
  if (themeName && themeName === 'dark') {
    const theme = useTheme()
    theme.global.name.value = themeName
  }
})
const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = isDarkMode.value ? 'light' : 'dark'
  localStorage.setItem('theme_name', theme.global.name.value)
}
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
    .v-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.75rem;
      flex-grow: 1;
      &.menu-items {
        direction: rtl;
        overflow-y: auto;
        scroll-behavior: smooth;
        scrollbar-width: thin;
        scrollbar-gutter: auto;
        .v-list-item {
          direction: ltr;
        }
      }

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

.toggle-theme {
  position: relative;
  .v-selection-control {
    min-height: min-content !important;
    .v-selection-control__wrapper {
      height: min-content;
    }
    &:not(.v-selection-control--dirty) {
      i {
        color: darkorange;
      }
    }
  }
  .v-input__details {
    position: absolute;
    top: 100%;
    width: 100%;
    display: none;
  }
}

.profile-item {
  .v-avatar {
    height: 44px !important;
    aspect-ratio: 1/1;
    width: 44px !important;
  }
}
</style>
