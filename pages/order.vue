<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Order
    </h1>
    <v-row
      no-gutters
      class="pa-2"
      style="flex-direction: column;"
    >
      <v-col
        cols="12"
        md="6"
        class="mx-auto pa-2"
      >
        <v-card color="blue-grey darken-4">
          <v-card-text class="pa-2">
            <div
              v-show="orderIsEmpty"
              class="pa-2"
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
                  @input="setItemQuantity(i, $event)"
                />
              </v-col>
              <v-btn
                color="error"
                outlined
                class="d-none d-md-flex ml-4 text-button"
                @click="removeItem(i)"
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
                @click="removeItem(i)"
              >
                <v-icon small>
                  fas fa-trash
                </v-icon>
              </v-btn>
            </v-row>
            <div
              v-show="!orderIsEmpty"
              class="text-center my-2"
            >
              <v-btn
                color="error"
                outlined
                class="text-button"
                @click="removeAllItems"
              >
                <v-icon left>
                  fas fa-trash
                </v-icon>
                Remove All
              </v-btn>
              <v-btn
                v-show="userId"
                color="primary"
                outlined
                class="ml-2 text-button"
                @click="addFavoriteDialogIsVisible = true"
              >
                <v-icon left>
                  fas fa-star
                </v-icon>
                Favorite
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-show="!orderIsEmpty"
        cols="12"
        md="6"
        class="mx-auto pa-2"
      >
        <v-card color="blue-grey darken-4">
          <v-card-title class="text-h5 blue-grey darken-3">
            <span class="mx-auto">Payment Details</span>
          </v-card-title>
          <v-card-text class="pa-4">
            <p class="mb-0 text-center">
              Subtotal: ${{ subtotal.toFixed(2) }}<br>
              Taxes: ${{ taxes.toFixed(2) }}
            </p>
            <p class="mb-0 text-center text-h6">
              Total: ${{ total.toFixed(2) }}
            </p>
          </v-card-text>
          <v-card-actions class="px-4 pt-0 pb-4">
            <v-spacer />
            <v-btn
              color="primary"
              outlined
              class="text-button"
              @click="purchaseOrder"
            >
              <v-icon left>
                fas fa-dollar-sign
              </v-icon>
              Purchase
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        v-show="userId"
        cols="12"
        md="6"
        class="mx-auto pa-2"
      >
        <v-card color="blue-grey darken-4">
          <v-card-title class="text-h5 blue-grey darken-3">
            <span class="mx-auto">Favorite Orders</span>
          </v-card-title>
          <v-card-text class="pa-4">
            <p
              v-show="favoriteOrders.length === 0"
              class="mb-0 text-center"
            >
              You do not have any favorites yet.<br>
              You can save your current order as a favorite above.
            </p>
            <v-list
              color="transparent"
              dense
              class="py-0"
            >
              <v-list-item
                v-for="(favoriteOrder, i) in favoriteOrders"
                :key="`favorite-order-${i}`"
                class="px-0"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="favoriteOrder.name" />
                </v-list-item-content>
                <v-list-item-icon style="height: 36px;">
                  <v-btn
                    icon
                    @click="shownFavoriteOrder = favoriteOrder"
                  >
                    <v-icon color="primary">
                      fas fa-eye
                    </v-icon>
                  </v-btn>
                </v-list-item-icon>
                <v-list-item-icon style="height: 36px;">
                  <v-btn
                    icon
                    @click="removeFavoriteOrder(i)"
                  >
                    <v-icon color="error">
                      fas fa-trash
                    </v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="addFavoriteDialogIsVisible"
      width="500"
    >
      <v-card class="blue-grey darken-4">
        <v-card-title class="pa-4 text-h5 blue-grey darken-3">
          <span class="mx-auto">Add Favorite Order</span>
        </v-card-title>
        <v-card-text class="pa-4">
          <v-text-field
            v-model="favoriteOrderName"
            label="Name"
            outlined
            dense
            hide-details
          />
        </v-card-text>
        <v-card-actions class="px-4 pt-0 pb-4">
          <v-spacer />
          <v-btn
            outlined
            text
            class="text-button"
            @click="addFavoriteDialogIsVisible = false"
          >
            <v-icon left>
              fas fa-times
            </v-icon>
            Close
          </v-btn>
          <v-btn
            color="primary"
            outlined
            text
            class="text-button"
            :disabled="!favoriteOrderName"
            @click="addOrderToFavorites"
          >
            <v-icon left>
              fas fa-star
            </v-icon>
            Favorite
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <order-favorite-dialog
      :order="shownFavoriteOrder"
      @close="shownFavoriteOrder = null"
    />
    <response-snackbar ref="responseSnackbar" />
  </div>
</template>

<script>
import categories from '~/assets/data/categories'

export default {
  data: vm => ({
    items: [],
    taxRate: 0.05,
    favoriteOrders: [
      {
        name: 'Waffles for Everyone',
        items: [
          {
            id: '1',
            quantity: 4,
          },
        ],
      },
    ],
    addFavoriteDialogIsVisible: false,
    favoriteOrderName: '',
    shownFavoriteOrder: null,
  }),
  head: vm => ({
    title: 'Order',
  }),
  computed: {
    orderIsEmpty() {
      return this.items.length === 0
    },
    subtotal() {
      return this.items.reduce((subtotal, item) => {
        return subtotal + item.price * item.quantity
      }, 0)
    },
    taxes() {
      return this.taxRate * this.subtotal
    },
    total() {
      return this.subtotal + this.taxes
    },
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
    userId() {
      return this.$store.state.userId
    },
  },
  mounted() {
    this.$store.state.items.forEach((item) => {
      this.items.push({
        ...this.allItemsById[item.id],
        ...item,
      })
    })
    
    this.favoriteOrders.forEach((favoriteOrder) => {
      for (let i = favoriteOrder.items.length - 1; i >= 0; i--) {
        const item = favoriteOrder.items[i]
        favoriteOrder.items[i] = { ...this.allItemsById[item.id], ...item }
      }
    })
  },
  methods: {
    setItemQuantity(index, quantity) {
      this.$store.commit('setItemQuantity', { index, quantity })
      this.items[index].quantity = quantity
    },
    removeItem(index) {
      this.$store.commit('removeItem', index)
      this.items.splice(index, 1)
    },
    removeAllItems() {
      this.items = []
      this.$store.commit('removeAllItems')
    },
    purchaseOrder() {
      this.$store.commit('removeAllItems')
      this.$refs.responseSnackbar.show('Order purchased successfully', 'success', 'check-circle')
    },
    addOrderToFavorites() {
      let isOverwritingOrder = false
      
      for (let i = this.favoriteOrders.length - 1; i >= 0; i--) {
        const favoriteOrder = this.favoriteOrders[i]
        
        if (favoriteOrder.name === this.favoriteOrderName) {
          favoriteOrder.items = this.items
          isOverwritingOrder = true
          break
        }
      }
      
      if (!isOverwritingOrder) {
        this.favoriteOrders.push({ name: this.favoriteOrderName, items: this.items })
      }
      
      this.addFavoriteDialogIsVisible = false
      this.$refs.responseSnackbar.show(`Favorite order '${this.favoriteOrderName}' added`, 'success', 'check-circle')
    },
    removeFavoriteOrder(index) {
      const { name } = this.favoriteOrders[index]
      this.favoriteOrders.splice(index, 1)
      this.$refs.responseSnackbar.show(`Favorite order '${name}' removed`, 'success', 'check-circle')
    },
  },
}
</script>
