<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Orders
    </h1>
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="pa-4"
      style="height: 100%;"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-card class="blue-grey darken-4">
          <v-card-text class="pa-4">
            <p
              v-show="orders.length === 0"
              class="mb-0 text-center"
            >
              Awaiting customer orders.
            </p>
            <v-list
              color="transparent"
              dense
              class="py-0"
            >
              <v-list-item
                v-for="(order, i) in orders"
                :key="`order-${i}`"
                class="px-0"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="order.name" />
                </v-list-item-content>
                <v-list-item-icon style="height: 36px;">
                  <v-btn
                    icon
                    @click="shownOrder = order"
                  >
                    <v-icon color="primary">
                      fas fa-eye
                    </v-icon>
                  </v-btn>
                </v-list-item-icon>
                <v-list-item-icon style="height: 36px;">
                  <v-btn
                    icon
                    @click="completeOrder(i)"
                  >
                    <v-icon color="success">
                      fas fa-check
                    </v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <order-dialog
      :order="shownOrder"
      @close="shownOrder = null"
    />
    <response-snackbar ref="responseSnackbar" />
  </div>
</template>

<script>
import categories from '~/assets/data/categories'

export default {
  data: vm => ({
    orders: [
      {
        name: 'Customer Name',
        items: [
          {
            id: '1',
            quantity: 1,
          },
        ],
        tip: 0.15,
        instructions: 'No cheese on the sandwich, please',
      },
    ],
    shownOrder: null,
  }),
  head: vm => ({
    title: 'Orders',
  }),
  computed: {
    allItems() {
      return categories.reduce((items, category) => {
        return items.concat(category.items)
      }, [])
    },
    allItemsById() {
      return this.allItems.reduce((itemsById, item) => {
        itemsById[item.id] = item
        return itemsById
      }, {})
    },
  },
  mounted() {
    if (!this.$store.state.userId) { this.$router.push('/signin') }
    if (this.$store.state.userRole !== 'employee') { this.$router.push('/menu') }
    
    this.orders.forEach((order) => {
      for (let i = order.items.length - 1; i >= 0; i--) {
        const item = order.items[i]
        order.items[i] = { ...this.allItemsById[item.id], ...item }
      }
    })
  },
  methods: {
    completeOrder(index) {
      const { name } = this.orders[index]
      this.orders.splice(index, 1)
      this.$refs.responseSnackbar.show(`Order '${name}' completed`, 'success', 'check-circle')
    },
  },
}
</script>
