<template>
  <v-snackbar
    v-model="isVisible"
    content-class="pa-2"
    :color="color"
  >
    <v-row no-gutters>
      <v-icon>
        fas fa-{{ icon }}
      </v-icon>
      <v-col class="pl-2">
        <span style="vertical-align: middle;">{{ message }}</span>
      </v-col>
    </v-row>
    <template #action="{ attrs }">
      <v-btn
        outlined
        text
        class="text-button"
        v-bind="attrs"
        @click="isVisible = false"
      >
        <v-icon left>
          fas fa-times
        </v-icon>
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: vm => ({
    isVisible: false,
    message: '',
    color: '',
    icon: '',
  }),
  methods: {
    show(message, color, icon) {
      this.message = message
      this.color = color
      this.icon = icon
      this.isVisible = true
    },
  },
}
</script>
