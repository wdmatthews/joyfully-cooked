<template>
  <div>
    <h1 class="text-h4 text-center mt-4">
      Joyfully Cooked
    </h1>
    <h2 class="text-h5 text-center">
      Delicious food with a sprinkle of joy
    </h2>
    <h3 class="text-h6 text-center mt-4">
      Our Values
    </h3>
    <v-row
      no-gutters
      justify="center"
      class="pa-2"
    >
      <v-col
        v-for="(value, i) in values"
        :key="`value-${i}`"
        cols="12"
        md="3"
        class="pa-2"
      >
        <welcome-info-card :info="value" />
      </v-col>
    </v-row>
    <h3 class="text-h6 text-center">
      Steps to a Joyful Meal
    </h3>
    <v-row
      no-gutters
      justify="center"
      class="pa-2"
    >
      <v-col
        v-for="(step, i) in steps"
        :key="`step-${i}`"
        cols="12"
        md="3"
        class="pa-2"
      >
        <welcome-info-card :info="step" />
      </v-col>
    </v-row>
    <p class="text-center px-4">
      Delicious images brought to you by
      <a href="https://www.kenney.nl/" target="_blank">Kenney</a>'s
      <a href="https://www.kenney.nl/assets/food-kit" target="_blank">Food Kit</a>
    </p>
  </div>
</template>

<script>
export default {
  data: vm => ({
    values: [
      {
        name: 'Joyful',
        icon: 'sun',
        description: 'We want to spread joy',
      },
      {
        name: 'Delicious',
        icon: 'apple-alt',
        description: 'We want to cook delicious food',
      },
      {
        name: 'Satisfying',
        icon: 'smile-beam',
        description: 'We want to satisfy your stomach',
      },
      {
        name: 'Affordable',
        icon: 'dollar-sign',
        description: 'We want our food to be affordable',
      },
    ],
    steps: [
      {
        name: 'Browse',
        icon: 'search',
        description: 'Browse our selection of food',
      },
      {
        name: 'Order',
        icon: 'shopping-bag',
        description: 'Order the meal you want',
      },
      {
        name: 'Wait',
        icon: 'clock',
        description: 'Wait for your meal',
      },
      {
        name: 'Eat',
        icon: 'utensils',
        description: 'Eat your delicious food',
      },
    ],
  }),
}
</script>
