<template lang="">
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
        <v-list class="" nav>
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
</template>
<script lang="ts" setup>
const navItems = [
  {
    title: 'Cards',
    value: 1,
    route: '/',
    icon: 'mdi-cards-outline',
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
  { title: 'Dashboard', value: 4, route: '/dashboard', icon: 'mdi-view-dashboard-outline' },
  {
    title: 'Sub-item Test',
    value: 5,
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
</script>
<style lang="css">
.v-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  flex-grow: 1;
  &.menu-items {
    direction: rtl;
    overflow-y: unset;
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
</style>
