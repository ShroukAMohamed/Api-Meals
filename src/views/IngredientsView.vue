<script setup>
import { computed, onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
onMounted(() => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    .then(({ data }) => {
      ingredients.value = data.meals;
    });
});
</script>

<template>
  <div class="search-ingredients">
    <div class="container">
      <div class="row mt-5">
        <h2 class="fw-bold">Meal Ingredients</h2>
        <div class="mt-4 mb-5">
          <input
            type="text"
            v-model="keyword"
            class="form-control"
            placeholder="Search for Ingredients"
          />
        </div>
        <router-link
          :to="{
            name: 'byIngredients',
            params: { ingredient: ingredient.strIngredient },
          }"
          v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient"
          class="col-lg-4"
        >
          <div class="bg-white rounded p-4 mb-5 shadow Card">
            <h3 class="fw-bold">{{ ingredient.strIngredient }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 45px;
  color: #d22525;
  letter-spacing: 1.3px;
}
a {
  text-decoration: none;
  color: black;
}
input {
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid #a8a8a8 !important;
}
.Card {
  border: 1.5px dashed #c2c1c1;
  transition: all 0.2s;
  color: #b21e1e;
  &:hover {
    transform: translateY(-12px);
  }
}
</style>
