<template>
  <v-dialog
    width="500"
    :value="order"
    @click:outside="$emit('close')"
  >
    <v-card
      v-if="order"
      class="blue-grey darken-4"
    >
      <v-card-title class="pa-4 text-h5 blue-grey darken-3">
        <span class="mx-auto">{{ order.name }}</span>
      </v-card-title>
      <v-card-text class="pa-4">
        <v-data-table
          hide-default-footer
          disable-sort
          dense
          style="background: transparent;"
          :headers="orderHeaders"
          :items="order.items"
          :class="{ 'hide-mobile-table-header': isMobile }"
        />
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
        <v-btn
          v-if="favorite"
          color="primary"
          outlined
          text
          class="text-button"
          @click="$emit('load')"
        >
          <v-icon left>
            fas fa-shopping-bag
          </v-icon>
          Load
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: () => {},
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  data: vm => ({
    quantity: 1,
    orderHeaders: [
      {
        text: 'Name',
        value: 'name',
      },
      {
        text: 'Quantity',
        value: 'quantity',
      },
    ],
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    },
  },
}
</script>

<style>
.hide-mobile-table-header .v-data-table-header.v-data-table-header-mobile {
  display: none;
}

.hide-mobile-table-header .v-data-table__mobile-row {
  padding: 0px !important;
}
</style>
