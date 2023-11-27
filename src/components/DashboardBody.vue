<template>
  <v-card class="d-flex flex-column pa-8 rounded-lg glass-surface">
    <v-card-text>
      <label class="input-label">
        User name
        <v-text-field
          type="text"
          placeholder="User name"
          color="primary"
          bg-color="surface-variant"
          base-color="surface"
          variant="outlined"
          hide-details="auto"
          rounded="lg"
          center-affix
          class="glass-surface rounded-lg"
        ></v-text-field>
      </label>
      <label class="input-label">
        User type
        <v-select
          placeholder="Choose an option"
          color="primary"
          bg-color="surface-variant"
          base-color="surface"
          variant="outlined"
          hide-details="auto"
          rounded="lg"
          center-affix
          class="glass-surface rounded-lg"
          menu-icon="mdi-chevron-down"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        ></v-select>
      </label>
      <label class="input-label">
        Data type
        <v-select
          placeholder="Choose an option"
          color="primary"
          bg-color="surface-variant"
          base-color="surface"
          variant="outlined"
          hide-details="auto"
          rounded="lg"
          center-affix
          class="glass-surface rounded-lg"
          menu-icon="mdi-chevron-down"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        ></v-select>
      </label>
      <label class="input-label">
        Registration
        <v-text-field
          type="date"
          placeholder="Choose a date"
          color="primary"
          bg-color="surface-variant"
          base-color="surface"
          variant="outlined"
          hide-details="auto"
          rounded="lg"
          center-affix
          class="glass-surface rounded-lg"
        ></v-text-field>
      </label>
      <label class="input-label">
        Service type
        <v-select
          placeholder="Choose an option"
          color="primary"
          bg-color="surface-variant"
          base-color="surface"
          variant="outlined"
          hide-details="auto"
          rounded="lg"
          center-affix
          class="glass-surface rounded-lg"
          menu-icon="mdi-chevron-down"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        ></v-select>
      </label>
      <label class="input-label">
        Status
        <v-radio-group
          inline
          color="onsurface"
          density="compact"
          false-icon="mdi-square-rounded-outline"
          true-icon="mdi-sticker-check-outline"
          class="text-on-background"
        >
          <v-radio label="Pending" value="pending"></v-radio>
          <v-radio label="In progress" value="progress"></v-radio>
          <v-radio label="Finished" value="finished"></v-radio>
        </v-radio-group>
      </label>
    </v-card-text>
    <v-divider :thickness="1" class="border-opacity-25"></v-divider>
    <v-card-actions>
      <v-btn
        variant="flat"
        elevation="4"
        color="primary"
        size="large"
        class="mr-2 rounded-inside"
        min-width="120"
        >Save</v-btn
      >
      <v-btn
        variant="flat"
        elevation=""
        color="surface"
        size="large"
        class="rounded-inside"
        min-width="120"
        >Cancel</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.v-card {
  gap: 1.25rem;

  .v-card-text {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
    grid-gap: 1.5rem 2rem;
    padding: 0;
    @media (max-width: 900px) {
      grid-gap: 1rem 1.5rem;
      @media (max-width: 600px) {
      }
    }
  }
  .v-card__underlay {
    display: none;
  }
}
</style>
