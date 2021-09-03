<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Menu
    </h1>
    <v-row
      no-gutters
      class="pa-2"
    >
      <v-col
        v-for="(category, i) in categories"
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
export default {
  data: vm => ({
    categories: [
      {
        name: 'Breakfast',
        items: [
          {
            id: '1',
            name: 'Waffle',
            image: 'waffle.png',
            description: 'A plain waffle in a square shape.',
            price: 1.00,
            ingredients: 'Flour, milk',
            commonAllergens: 'Milk',
            nutritionFacts: [
              {
                calories: 1,
                fat: 1,
                carbs: 1,
                protein: 1,
              },
            ],
          },
          {
            id: '2',
            name: 'Pancakes',
            image: 'pancakes.png',
            description: 'A stack of pancakes with butter and syrup.',
            price: 1.50,
            ingredients: 'Flour, milk, butter, syrup',
            commonAllergens: 'Milk',
            nutritionFacts: [
              {
                calories: 1,
                fat: 1,
                carbs: 1,
                protein: 1,
              },
            ],
          },
        ],
      },
      {
        name: 'Sandwiches',
        items: [
          {
            id: '3',
            name: 'Turkey Sandwich',
            image: 'turkeysandwich.png',
            description: 'A triangle-sliced turkey, lettuce, and cheese sandwich.',
            price: 1.75,
            ingredients: 'Flour, milk, turkey, lettuce, cheese',
            commonAllergens: 'Milk',
            nutritionFacts: [
              {
                calories: 1,
                fat: 1,
                carbs: 1,
                protein: 1,
              },
            ],
          },
        ],
      },
    ],
    shownItem: null,
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
  methods: {
    showItem(id) {
      this.shownItem = this.itemsById[id]
    },
    addShownItemToOrder(quantity) {
      this.$refs.responseSnackbar.show(`${this.shownItem.name} added to your order`,
        'success', 'check-circle')
      this.snackbarIsVisible = true
      this.shownItem = null
    },
  },
}
</script>
