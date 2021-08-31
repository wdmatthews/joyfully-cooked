<template>
  <v-app-bar app>
    <v-toolbar-title class="text-h6">
      Joyfully Cooked
    </v-toolbar-title>
    <v-spacer />
    <v-app-bar-nav-icon class="mr-n3 d-md-none" />
    <v-toolbar-items class="mr-n4 d-none d-md-flex">
      <v-btn
        v-for="(link, i) in links"
        :key="`link-${i}`"
        plain
        class="text-button"
      >
        <template v-if="link.isOrder">
          <v-badge
            :content="3"
            :value="3"
            color="secondary darken-1"
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
  data: vm => ({
    links,
  }),
}
</script>
