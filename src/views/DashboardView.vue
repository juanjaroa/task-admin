<template>
  <header class="d-flex align-center flex-wrap">
    <UserMenu />
    <NotificationsButton />
    <v-text-field
      type="search"
      clearable
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      color="primary"
      bg-color="surface-variant"
      base-color="surface"
      variant="outlined"
      hide-details="auto"
      rounded="lg"
      center-affix
      class="glass-surface rounded-lg"
    ></v-text-field>
  </header>
  <DashboardBody />
</template>
<script lang="ts" setup>
import UserMenu from '@/components/dashboard-utils/UserMenu.vue'
import NotificationsButton from '@/components/dashboard-utils/NotificationsButton.vue'
import DashboardBody from '@/components/DashboardBody.vue'
</script>
<style lang="scss">
header {
  gap: 3rem;
  @media (max-width: 900px) {
    gap: 2rem;
    @media (max-width: 600px) {
      gap: 1rem;
    }
  }
}
</style>
