<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Menu
    </h1>
    <v-row
      no-gutters
      justify="center"
      class="px-2 pt-4"
    >
      <v-col
        cols="12"
        md="6"
        class="px-2"
      >
        <v-text-field
          v-model="searchQuery"
          label="Search"
          outlined
          dense
          hide-details
          append-icon="fas fa-search"
        />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      class="pa-2"
    >
      <v-col
        v-for="(category, i) in categories"
        v-show="category.items.length > 0"
        :key="`category-${i}`"
        cols="12"
        md="3"
        class="pa-2"
      >
        <menu-category-card
          style="height: 100%;"
          :category="category"
          @show-item="showItem"
        />
      </v-col>
    </v-row>
    <menu-item-dialog
      :item="shownItem"
      @close="shownItem = null"
      @add-to-order="addShownItemToOrder($event)"
    />
    <response-snackbar ref="responseSnackbar" />
  </div>
</template>

<script>
import categories from '~/assets/data/categories'

export default {
  data: vm => ({
    categories: [
      {
        name: 'Search Results',
        items: [],
      },
      ...categories,
    ],
    shownItem: null,
    searchQuery: '',
  }),
  head: vm => ({
    title: 'Menu',
  }),
  computed: {
    itemsById() {
      const itemsById = {}
      
      this.categories.forEach((category) => {
        category.items.forEach((item) => {
          itemsById[item.id] = item
        })
      })
      
      return itemsById
    },
  },
  watch: {
    searchQuery(value) {
      const searchResults = []
      const searchQuery = value.toLowerCase().replace(/[^a-z ]/g, '').split(' ')
      const searchQueryLength = searchQuery.length
      
      if (searchQueryLength > 0) {
        this.categories.forEach((category, index) => {
          if (index === 0) { return }
          category.items.forEach((item) => {
            for (let i = 0; i < searchQueryLength; i++) {
              if (item.keywords.includes(searchQuery[i])) {
                searchResults.push(item)
                break
              }
            }
          })
        })
      }
      
      this.categories[0].items = searchResults
    },
  },
  methods: {
    showItem(id) {
      this.shownItem = this.itemsById[id]
    },
    addShownItemToOrder(quantity) {
      this.$store.commit('addItemToOrder', { item: this.shownItem, quantity })
      this.$refs.responseSnackbar.show(`${this.shownItem.name} added to your order`,
        'success', 'check-circle')
      this.snackbarIsVisible = true
      this.shownItem = null
    },
  },
}
</script>
