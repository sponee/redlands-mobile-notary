import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Appointments from "./views/Appointments.vue";
import Contact from "./views/Contact.vue";
import Services from "./views/Services.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/appointments",
      name: "appointments",
      component: Appointments
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
  ]
});
