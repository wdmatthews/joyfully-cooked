<template>
  <v-card class="blue-grey darken-4">
    <v-card-title class="text-h5 blue-grey darken-3">
      <span
        class="mx-auto"
        style="display: flex; align-items: center;"
      >
        <v-icon
          left
          class="my-auto"
        >fas fa-{{ info.icon }}</v-icon>
        {{ info.name }}
      </span>
    </v-card-title>
    <v-card-text class="pa-4 text-center">
      {{ info.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
