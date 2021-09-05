<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    class="pa-4"
    style="height: 100%;"
  >
    <v-card
      v-show="!passwordWasReset"
      class="blue-grey darken-4"
    >
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
    <p
      v-show="passwordWasReset"
      class="mb-0 text-center"
    >
      Your password was reset successfully.<br>
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      Now you can <nuxt-link to="/signin">sign in</nuxt-link>.
    </p>
    <response-snackbar ref="responseSnackbar" />
  </v-row>
</template>

<script>
export default {
  data: vm => ({
    password: '',
    passwordWasReset: false,
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
      this.$store.commit('setUserId', '')
      this.passwordWasReset = true
      this.$refs.responseSnackbar.show('Password reset successfully', 'success', 'check-circle')
    },
  },
}
</script>
