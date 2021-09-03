<template>
  <v-dialog
    width="500"
    :value="item"
    @click:outside="$emit('close')"
  >
    <v-card
      v-if="item"
      class="blue-grey darken-4"
    >
      <v-img
        max-width="256"
        class="mx-auto"
        :alt="`An image of ${item.name}`"
        :src="require(`~/assets/images/${item.image}`)"
      />
      <v-card-title class="pa-4 text-h5 text-center blue-grey darken-3">
        {{ item.name }}
      </v-card-title>
      <v-card-text class="pa-4">
        <p v-text="item.description" />
        <v-row no-gutters>
          <v-col class="pr-4">
            <menu-item-quantity-field
              v-model="quantity"
              :item="item"
            />
          </v-col>
          <v-btn
            color="primary"
            outlined
            class="text-button my-auto"
            :disabled="!quantity"
            @click="$emit('add-to-order', quantity)"
          >
            <v-icon left>
              fas fa-shopping-bag
            </v-icon>
            Add
          </v-btn>
        </v-row>
      </v-card-text>
      <v-card-actions class="px-4 pt-0 pb-4">
        <v-spacer />
        <v-btn
          outlined
          text
          class="text-button"
          @click="$emit('close')"
        >
          <v-icon left>
            fas fa-times
          </v-icon>
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data: vm => ({
    quantity: 1,
  }),
}
</script>
