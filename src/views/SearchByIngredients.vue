<script setup>
import { computed, onMounted } from "vue";
import store from "@/store";
import { useRoute } from "vue-router/composables";
import MealItem from "@/components/MealItem.vue";
const route = useRoute();
const meals = computed(() => store.getters.mealsByIngredient);
const params = document.URL.split("/");
const urlParams = params[4];
const paramsValue = decodeURIComponent(urlParams);
console.log(params);
console.log(params.value);
onMounted(() => {
  store.dispatch("search_by_ingredient", route.params.ingredient);
});
</script>

<template>
  <div class="search-ingredients">
    <div class="container">
      <h2 class="fw-bold mt-5 mb-5">Meals for {{ paramsValue }}</h2>
      <div
        v-if="!meals.length"
        class="row justify-content-center align-items-center"
      >
        <div class="fw-bold text-center no-meals">
          <p class="mb-0">There Are No Meals</p>
        </div>
      </div>
      <div v-if="meals.length">
        <meal-item :meals="meals" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 40px;
  color: #d22525;
}
.row {
  height: 90vh;
  .no-meals {
    background-color: #e8e8e8;
    padding: 80px 0;
    p {
      font-size: 35px;
      letter-spacing: 1.5px;
      font-family: Serif;
    }
  }
}
</style>
