<template>
  <v-text-field
    v-model="preferredQuantity"
    label="Quantity"
    outlined
    dense
    hide-details
    :suffix="`$${price.toFixed(2)}`"
    @keyup="parsePreferredQuantity"
  />
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    value: {
      type: [Number, String],
      default: 1,
    },
  },
  data: vm => ({
    preferredQuantity: '1',
  }),
  computed: {
    price() {
      return this.value ? (this.value * this.item.price) : 0
    },
  },
  watch: {
    item(value) {
      if (value) {
        this.$emit('input', 1)
        this.preferredQuantity = '1'
      }
    },
  },
  mounted() {
    this.preferredQuantity = `${this.value}`
  },
  methods: {
    parsePreferredQuantity() {
      this.preferredQuantity = this.preferredQuantity.replace(/[^0-9]/g, '')
      this.$emit('input', this.preferredQuantity ? parseInt(this.preferredQuantity) : 0)
    },
  },
}
</script>
