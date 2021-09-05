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
        <span class="mx-auto">Sign In</span>
      </v-card-title>
      <v-card-text class="px-4 pt-4 pb-2">
        <email-field
          v-model="email"
          class="mb-n1"
          @enter="signIn"
        />
        <password-field
          v-model="password"
          class="mb-n1"
          @enter="signIn"
        />
        <p class="mb-0">
          Forgot password?
          <a
            :style="{ opacity: email ? 1 : 0.75, cursor: email ? 'pointer' : 'default' }"
            @click.stop="email ? sendPasswordResetEmail() : null"
          >Send a password reset email</a>
        </p>
      </v-card-text>
      <v-card-actions class="px-4 pt-0 pb-4">
        <v-spacer />
        <v-btn
          color="primary"
          outlined
          class="text-button"
          :disabled="!formIsValid"
          @click="signIn"
        >
          <v-icon left>
            fas fa-sign-in-alt
          </v-icon>
          Sign In
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
    email: '',
    password: '',
  }),
  head: vm => ({
    title: 'Sign In',
  }),
  computed: {
    formIsValid() {
      const passwordLength = this.password.length
      return this.email && passwordLength >= 8 && passwordLength <= 32
    },
  },
  mounted() {
    if (this.$store.state.userId) { this.$router.push('/menu') }
  },
  methods: {
    signIn() {
      if (!this.formIsValid) { return }
      this.$store.commit('setUserId', '1')
      this.$router.push('/menu')
    },
    sendPasswordResetEmail() {
      if (!this.email) { return }
      this.$refs.responseSnackbar.show('Password reset email sent', 'success', 'check-circle')
    },
  },
}
</script>
