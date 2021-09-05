<template>
  <v-text-field
    label="Email"
    outlined
    dense
    prepend-icon="fas fa-envelope"
    :value="value"
    @input="$emit('input', $event)"
    @keydown.enter="$emit('enter')"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
