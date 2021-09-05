<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Orders
    </h1>
    
    <response-snackbar ref="responseSnackbar" />
  </div>
</template>

<script>
export default {
  head: vm => ({
    title: 'Orders',
  }),
  mounted() {
    if (!this.$store.state.userId) { this.$router.push('/signin') }
    if (this.$store.state.userRole !== 'employee') { this.$router.push('/menu') }
  },
  methods: {
    
  },
}
</script>
