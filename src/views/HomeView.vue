<template>
  <div class="home">
    <div class="container">
      <h2 class="fw-bold mt-5">Random Meals</h2>
      <meal-item :meals="meals" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";
import MealItem from "@/components/MealItem.vue";
const meals = ref([]);
onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>

<style scoped lang="scss">
h2 {
  font-size: 45px;
  color: #d22525;
  letter-spacing: 1.5px;
}
</style>
