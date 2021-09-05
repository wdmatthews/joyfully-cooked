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
        <span class="mx-auto">Sign Up</span>
      </v-card-title>
      <v-card-text class="px-4 pt-4 pb-0">
        <email-field
          v-model="email"
          class="mb-n1"
          @enter="signUp"
        />
        <password-field
          v-model="password"
          class="mb-n1"
          @enter="signUp"
        />
      </v-card-text>
      <v-card-actions class="px-4 pt-0 pb-4">
        <v-spacer />
        <v-btn
          color="primary"
          outlined
          class="text-button"
          :disabled="!formIsValid"
          @click="signUp"
        >
          <v-icon left>
            fas fa-user-plus
          </v-icon>
          Sign Up
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
    title: 'Sign Up',
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
    signUp() {
      if (!this.formIsValid) { return }
      this.$store.commit('setUserId', '1')
      this.$store.commit('setUserRole', 'customer')
      this.$router.push('/menu')
    },
  },
}
</script>
