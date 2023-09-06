import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import AddRest from "./components/Add.vue";
import UpdateRest from "./components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "signup",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "addrest",
    path: "/addrest",
    component: AddRest,
  },
  {
    name: "updaterest",
    path: "/update/:id",
    component: UpdateRest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
