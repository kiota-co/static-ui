<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen">

    <div class="min-h-screen">


      <MenuBar />



      <div class="Wrapper mx-auto max-w-7xl sm:px-6 lg:px-8">
        <RouterView />
      </div>



    </div>
  </div>
</template>


<script>

import { lifecycleLoggerMixin } from "@/mixins/lifecycleLoggerMixin";

import AppLayout from "@/layouts/AppLayout";
import MenuBar from "@/components/MenuBar.vue";
import GreetingsComponent from "@/components/GreetingsComponent.vue";

export default {
  name: 'App',
  components: { AppLayout, MenuBar, GreetingsComponent },

  mixins: [lifecycleLoggerMixin]
}



</script>


<!-- <script>
// import { defineComponent } from "vue";
// import PanelComponent from "@/components/PanelComponent.vue";
// export default defineComponent({
//   components: { PanelComponent },
// });

// import { ref } from "vue";
// import AirportCards from "@/components/AirportCards.vue";

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


</script> -->