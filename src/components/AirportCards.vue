<template>
  <div class="wrapper rounded-sm">
    <div
      v-for="airport in airports"
      :key="airport.abbreviation"
      class="card bg-white"
    >
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import data from "@/data/us-airports.js";

export default {
  name: "Airports",

  props: {
    airports: {
      type: Array,
      required: true,
    },
  },
};
</script>
