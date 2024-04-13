import { createRouter, createWebHistory } from "vue-router";
import AgentDashboard from "@/views/AgentDashboard.vue";
import FruitsPage from "@/views/FruitsPage.vue";
import FruitDetails from "@/views/FruitDetails.vue";
import ErrorPage from "@/views/ErrorPage .vue";
import Onboarding from "@/views/Onboarding.vue";
import LandScapeProperties from "@/views/PropertyProfile/LandScapeProperties.vue";
const routes = [
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
  {
    path: "/",
    component: Onboarding,
  },
  {
    path: "/agent-dashboard",
    name: "AgentDashboard",
    component: AgentDashboard,
     // Example of attaching metadata
  },

  {
    path: "/landscape-properties",
    name: "LandScapeProperties",
    component: LandScapeProperties,
     // Example of attaching metadata
  },

  
  {
    path: "/fruits",
    name: "Fruits",
    component: FruitsPage,
  },
  //  {
  //     path: '/fruits/:id',
  //     name: 'FruitDetails',
  //     component: FruitDetails,
  //  },

  {
    path: "/fruits/:id",
    name: "FruitDetails",
    component: FruitDetails,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
