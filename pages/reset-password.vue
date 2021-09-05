<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    class="pa-4"
    style="height: 100%;"
  >
    <v-card class="blue-grey darken-4">
      <v-card-title class="text-h5 blue-grey darken-3">
        <span class="mx-auto">Reset Password</span>
      </v-card-title>
      <v-card-text class="px-4 pt-4 pb-0">
        <password-field
          v-model="password"
          class="mb-n1"
          @enter="resetPassword"
        />
      </v-card-text>
      <v-card-actions class="px-4 pt-0 pb-4">
        <v-spacer />
        <v-btn
          color="primary"
          outlined
          class="text-button"
          :disabled="!formIsValid"
          @click="resetPassword"
        >
          <v-icon left>
            fas fa-redo
          </v-icon>
          Reset
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
    <response-snackbar ref="responseSnackbar" />
  </v-row>
</template>

<script>
export default {
  data: vm => ({
    password: '',
  }),
  head: vm => ({
    title: 'Reset Your Password',
  }),
  computed: {
    formIsValid() {
      const passwordLength = this.password.length
      return passwordLength >= 8 && passwordLength <= 32
    },
  },
  methods: {
    resetPassword() {
      if (!this.formIsValid) { return }
      this.$refs.responseSnackbar.show('Password reset successfully', 'success', 'check-circle')
    },
  },
}
</script>
