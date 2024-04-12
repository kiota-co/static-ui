<script>
// import { defineComponent } from "vue";
// import PanelComponent from "@/components/PanelComponent.vue";
// export default defineComponent({
//   components: { PanelComponent },
// });

// import { ref } from "vue";
// import AirportCards from "@/components/AirportCards.vue";
import MenuBar from "@/components/MenuBar.vue";
import GreetingsComponent from "@/components/GreetingsComponent.vue";
// import usAirportData from "@/data/us-airports.js";
// import euAirportData from "@/data/eu-airports.js";

// export default {
//   name: "App",
//   components: {
//     AirportCards,
//     MenuBar,
//   },
//   setup() {
//     const usAirports = ref(usAirportData);
//     const euAirports = ref(euAirportData);

//     return { usAirports, euAirports };
//   },
// };

export default {
  name: "App",
  components: {
    MenuBar, GreetingsComponent
  },

};
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen">

    <div class="   min-h-screen">
      <MenuBar />

      <GreetingsComponent />

      <div class="Wrapper mx-auto max-w-7xl sm:px-6 lg:px-8">

        <RouterView />
      </div>

    </div>
  </div>
</template>

<style></style>
