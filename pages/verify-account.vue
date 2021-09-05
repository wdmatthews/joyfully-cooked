<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    class="pa-4 text-center"
    style="height: 100%;"
  >
    <p class="mb-0">
      Your account was verified successfully.<br>
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      Now you can <nuxt-link to="/signin">sign in</nuxt-link>.
    </p>
  </v-row>
</template>

<script>
export default {
  head: vm => ({
    title: 'Account Verified',
  }),
  mounted() {
    
  },
}
</script>
