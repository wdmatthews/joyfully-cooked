<template>
  <v-text-field
    label="Password"
    outlined
    dense
    prepend-icon="fas fa-key"
    hint="8-32 characters"
    type="password"
    :rules="rules"
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
  data: vm => ({
    rules: [
      v => !v || v.length <= 32 || 'Max 32 characters',
    ],
  }),
}
</script>
