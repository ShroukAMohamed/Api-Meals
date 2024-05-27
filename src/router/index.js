import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchByIngredients from "@/views/SearchByIngredients.vue";
import SearchByLetter from "@/views/SearchByLetter.vue";
import SearchByName from "@/views/SearchByName.vue";
import IngredientsView from "@/views/IngredientsView.vue";
import MealDetails from "@/views/MealDetails.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/by-name/:name?",
    name: "byName",
    component: SearchByName,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: SearchByLetter,
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: IngredientsView,
  },
  {
    path: "/by-ingredients/:ingredient?",
    name: "byIngredients",
    component: SearchByIngredients,
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: MealDetails,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
