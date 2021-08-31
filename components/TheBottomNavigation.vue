<template>
  <v-bottom-navigation
    app
    color="primary"
    class="d-md-none"
  >
    <v-btn
      v-for="(link, i) in links"
      :key="`link-${i}`"
      class="text-button"
      :to="link.to"
    >
      <template v-if="link.isOrder">
        <v-badge
          :content="3"
          :value="3"
          color="secondary darken-2"
          overlap
          :offset-y="-4"
        >
          <span>{{ link.text }}</span>
        </v-badge>
        <v-icon>fas fa-{{ link.icon }}</v-icon>
      </template>
      <template v-else>
        <span>{{ link.text }}</span>
        <v-icon>fas fa-{{ link.icon }}</v-icon>
      </template>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import links from '~/assets/data/links'

export default {
  data: vm => ({
    links,
  }),
}
</script>
