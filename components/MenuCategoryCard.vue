<template>
  <v-card class="blue-grey darken-4">
    <v-card-title class="text-h5 text-center blue-grey darken-3">
      {{ category.name }}
    </v-card-title>
    <v-card-text>
      <v-list
        color="transparent"
        dense
        class="pt-4 pb-0"
      >
        <v-list-item
          v-for="item in category.items"
          :key="`item-${item.id}`"
          class="px-0"
        >
          <v-list-item-avatar>
            <v-img
              :alt="`An image of ${item.name}`"
              :src="require(`~/assets/images/${item.image}`)"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn
              icon
              @click="$emit('show-item', item.id)"
            >
              <v-icon color="primary">
                fas fa-eye
              </v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
