<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Order
    </h1>
    <v-row
      no-gutters
      justify="center"
      class="pa-2"
    >
      <v-col
        cols="12"
        md="6"
        class="pa-2"
      >
        <v-card color="blue-grey darken-4">
          <v-card-text class="pa-2">
            <div
              v-show="items.length === 0"
              class="pa-2 text-center"
            >
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              Your order is empty, but you can fill it up at the <nuxt-link to="/menu">menu</nuxt-link>!
            </div>
            <v-row
              v-for="(item, i) in items"
              :key="`item-${item.id}`"
              no-gutters
              align="center"
              class="pa-2"
            >
              <v-img
                contain
                width="40"
                height="40"
                style="max-width: 40px;"
                :alt="`An image of ${item.name}`"
                :src="require(`~/assets/images/${item.image}`)"
              />
              <v-col class="px-4">
                {{ item.name }}
              </v-col>
              <v-col>
                <quantity-field
                  :item="item"
                  :value="item.quantity"
                  @input="setItemQuantity(item, $event)"
                />
              </v-col>
              <v-btn
                color="error"
                outlined
                class="d-none d-md-flex ml-4 text-button"
                @click="removeItem(item, i)"
              >
                <v-icon left>
                  fas fa-trash
                </v-icon>
                Remove
              </v-btn>
              <v-btn
                color="error"
                outlined
                icon
                class="d-md-none ml-4 text-button"
                @click="removeItem(item, i)"
              >
                <v-icon>fas fa-trash</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: vm => ({
    items: [
      {
        id: '1',
        name: 'Waffle',
        image: 'waffle.png',
        price: 1.00,
        quantity: 1,
      },
      {
        id: '2',
        name: 'Pancakes',
        image: 'pancakes.png',
        price: 1.50,
        quantity: 1,
      },
      {
        id: '3',
        name: 'Turkey Sandwich',
        image: 'turkeysandwich.png',
        price: 1.75,
        quantity: 1,
      },
    ],
  }),
  head: vm => ({
    title: 'Order',
  }),
  methods: {
    setItemQuantity(item, quantity) {
      item.quantity = quantity
    },
    removeItem(item, index) {
      this.items.splice(index, 1)
    },
  },
}
</script>
