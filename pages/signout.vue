<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    class="text-center"
    style="height: 100%;"
  >
    You were signed out successfully.<br>Enjoy the rest of your day!
  </v-row>
</template>

<script>
export default {
  head: vm => ({
    title: 'Signed Out',
  }),
  mounted() {
    if (!this.$store.state.userId) { this.$router.push('/menu') }
    this.$store.commit('setUserId', '')
  },
}
</script>
