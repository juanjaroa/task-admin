<template>
  <v-list-item prepend-avatar="/img/avatar.jpg" title="Juan Roa" class="profile-item" nav>
    <template v-slot:append>
      <div style="">
        <v-switch
          v-model="isDarkMode"
          color="surface"
          inset
          persistent-hint
          @click="toggleTheme"
          false-icon="mdi-weather-sunny"
          true-icon="mdi-weather-night"
          class="toggle-theme pl-8"
        ></v-switch>
      </div>
    </template>
  </v-list-item>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
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

const toggleTheme = () => {
  theme.global.name.value = isDarkMode.value ? 'light' : 'dark'
  localStorage.setItem('theme_name', theme.global.name.value)
}
</script>
<style lang="scss" scoped>
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

.profile-item {
  .v-list-item__append {
  }
  .v-avatar {
    height: 44px !important;
    aspect-ratio: 1/1;
    width: 44px !important;
  }
}
</style>
<style lang="scss">
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
</style>
