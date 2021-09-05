<template>
  <span>Account</span>
</template>

<script>
export default {
  head: vm => ({
    title: 'Account',
  }),
  mounted() {
    if (!this.$store.state.userId) { this.$router.push('/signin') }
  },
}
</script>
