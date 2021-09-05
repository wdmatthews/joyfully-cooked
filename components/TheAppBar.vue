<template>
  <v-app-bar app>
    <v-spacer class="d-md-none" />
    <v-toolbar-title class="text-h6">
      <nuxt-link
        to="/"
        class="white--text text-decoration-none"
      >
        <img
          src="/favicon.png"
          height="32"
          style="vertical-align: middle;"
        >
        <span style="vertical-align: middle;">
          Joyfully Cooked
        </span>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="mr-n4 d-none d-md-flex">
      <v-btn
        v-for="(link, i) in links"
        :key="`link-${i}`"
        plain
        active-class="primary--text"
        class="text-button"
        :to="link.to"
      >
        <template v-if="link.isOrder">
          <v-badge
            :content="totalOrderQuantity"
            :value="totalOrderQuantity"
            color="secondary darken-2"
            inline
          >
            <v-icon left>
              fas fa-{{ link.icon }}
            </v-icon>
            {{ link.text }}
          </v-badge>
        </template>
        <template v-else>
          <v-icon left>
            fas fa-{{ link.icon }}
          </v-icon>
          {{ link.text }}
        </template>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import links from '~/assets/data/links'

export default {
  computed: {
    totalOrderQuantity() {
      return this.$store.getters.totalOrderQuantity
    },
    links() {
      return links.filter((link) => {
        const { userId, userRole } = this.$store.state
        return (!link.role || (!userRole && link.role !== 'employee') || link.role === userRole)
          && ((!link.requiresAuthentication && !link.requiresNoAuthentication)
            || (link.requiresAuthentication && userId)
            || (link.requiresNoAuthentication && !userId))
      })
    },
  },
}
</script>
