<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    style="height: 100%"
  >
    <div class="text-center">
      <v-img
        src="/error.png"
        class="mx-auto"
        :max-width="256"
      />
      <h1 class="text-h6">
        Error {{ error.statusCode }}
      </h1>
      <p class="mb-0">
        Uh oh, it looks like an ingredient went missing!<br>
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        Try going to the <nuxt-link to="/menu">menu</nuxt-link>, I'm sure you can find something delicious there!
      </p>
    </div>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head: vm => ({
    title: `Error ${vm.error.statusCode}`,
  }),
}
</script>
