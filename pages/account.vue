<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Account
    </h1>
    <v-row
      no-gutters
      class="pa-2"
      style="flex-direction: column;"
    >
      <v-col
        cols="12"
        md="6"
        class="mx-auto pa-2"
      >
        <v-card color="blue-grey darken-4">
          <v-card-title class="text-h5 blue-grey darken-3">
            <span class="mx-auto">Reset Password</span>
          </v-card-title>
          <v-card-text class="pa-4">
            <p class="mb-0 text-center">
              Click "Reset" to send a password reset email.
            </p>
          </v-card-text>
          <v-card-actions class="px-4 pt-0 pb-4">
            <v-spacer />
            <v-btn
              color="primary"
              outlined
              class="text-button"
              @click="sendPasswordResetEmail"
            >
              <v-icon left>
                fas fa-envelope
              </v-icon>
              Reset
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <response-snackbar ref="responseSnackbar" />
  </div>
</template>

<script>
export default {
  head: vm => ({
    title: 'Account',
  }),
  mounted() {
    if (!this.$store.state.userId) { this.$router.push('/signin') }
  },
  methods: {
    sendPasswordResetEmail() {
      this.$refs.responseSnackbar.show('Password reset email sent', 'success', 'check-circle')
    },
  },
}
</script>
