<template>
  <div class="search-name">
    <div class="container">
      <div class="mt-5 mb-5">
        <h2 class="fw-bold">Search For Meals</h2>
        <input
          type="text"
          v-model="keyword"
          class="form-control mt-5"
          placeholder="Search for meal"
          @keydown="searchMealsFood"
        />
      </div>
      <meal-item :meals="meals" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import store from "@/store";
import MealItem from "@/components/MealItem.vue";
const keyword = ref("");
const meals = computed(() => store.getters.searchedMeals);
store.dispatch("search_by_keyword", keyword.value);
function searchMealsFood() {
  store.dispatch("search_by_keyword", keyword.value);
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 45px;
  color: #d22525;
}
img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
a {
  text-decoration: none;
  cursor: pointer;
}
input {
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid #a8a8a8 !important;
}
</style>
