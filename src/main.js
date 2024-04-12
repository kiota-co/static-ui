import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// import Home from "./views/Home.vue";

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";

import Lara from "./presets/lara";
import router from "./routes";

// Components
import Panel from "primevue/panel";
import Menubar from 'primevue/menubar';
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const app = createApp(App);
app.component("Panel", Panel);
app.component("Menubar", Menubar)
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.use(PrimeVue, { unstyled: true, pt: Lara });
app.use(router)
app.mount("#app");


// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: "/", component: Home },
//     { path: "/about", component: About },
//   ],
// });