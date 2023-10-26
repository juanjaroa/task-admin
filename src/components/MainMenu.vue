<template>
  <v-navigation-drawer
    :model-value="mobile ? drawer : true"
    :expand-on-hover="!mobile"
    :rail="mobile ? false : rail"
    rounded="rem"
    rail-width="86"
    permanent
    class="glass-surface"
    :elevation="rail ? 12 : 1"
    tag="header"
    width="350"
    :location="mobile ? 'bottom' : 'start'"
    :temporary="mobile"
  >
    <div
      class="toggle-bottom-navigation bg-surface"
      v-show="mobile"
      @click="console.log(drawer), (drawer = !drawer)"
    ></div>
    <v-list-item prepend-avatar="/img/avatar.jpg" title="jRoa" class="profile-item" nav>
      <template v-slot:append>
        <v-switch
          v-model="isDarkMode"
          color="surface"
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
        @click="drawer = !drawer"
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
    <footer class="d-flex" style="min-width: 8rem" v-if="!mobile">
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

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const drawer = ref(false)
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
    route: '/planning',
    icon: 'mdi-calendar-blank-outline',
    subMenu: false
  },
  {
    title: 'Color Palette',
    value: 3,
    route: '/color-palette',
    icon: 'mdi-palette'
  },
  {
    title: 'Sub-item Test',
    value: 4,
    route: '',
    icon: 'mdi-file-tree',
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
  &.v-navigation-drawer--bottom {
    position: fixed !important;
    top: unset !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    transform: translateY(calc(100% - 1.5rem)) !important;
    min-height: fit-content !important;
    padding-top: 2rem;
    &.v-navigation-drawer--active {
      transform: translateY(0%) !important;
    }
    .v-list {
      &.menu-items {
        direction: ltr !important;
        .v-list-item {
          direction: ltr;
        }
      }
    }
  }
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

.v-theme--light {
  .toggle-theme {
    .v-switch__track {
      background-color: rgb(var(--v-theme-surface));
    }
    .v-switch__thumb {
      background-color: rgba(var(--v-theme-surface), 1);
      i {
        color: rgb(var(--v-theme-warning));
      }
    }
  }
}
.v-theme--dark {
  .toggle-theme {
    .v-switch__track {
      background-color: rgb(var(--v-theme-surface));
    }
    .v-switch__thumb {
      background-color: rgba(var(--v-theme-surface), 1);
      i {
        color: rgb(var(--v-theme-warning));
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
.toggle-bottom-navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  opacity: 0.25;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 1px;
    background-color: rgba(var(--v-theme-on-surface), 0.5);
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
