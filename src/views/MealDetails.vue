<template>
  <div class="meal-details">
    <div class="container">
      <div class="row justify-content-center align-items-center mt-5">
        <div class="col-7">
          <h2 class="pb-4 fw-bold">{{ meal.strMeal }}</h2>
          <img
            class="img-fluid rounded"
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
          />
        </div>
        <div class="col-lg-5">
          <div class="d-flex justify-content-between">
            <p><span class="fw-bold">Category:</span> {{ meal.strCategory }}</p>
            <p><span class="fw-bold">Area:</span> {{ meal.strArea }}</p>
            <p><span class="fw-bold">Tags:</span> {{ meal.strTags }}</p>
          </div>
          <p>{{ meal.strInstructions }}</p>
          <div class="d-flex justify-content-between mt-5">
            <a :href="meal.strYoutube" target="_blank" class="btn btn-danger"
              >Go To Youtube</a
            >
            <a :href="meal.strSource" target="_blank" class="btn btn-success"
              >View Original Source</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row mt-4">
          <h3>Ingredients:</h3>
          <div
            class="col-lg-2"
            v-for="(el, index) of new Array(20)"
            :key="index"
          >
            <p v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }} {{ meal[`strIngredient${index + 1}`] }}
            </p>
          </div>
        </div>
        <div class="row mt-4 mb-5">
          <h3>Measures:</h3>
          <div
            class="col-lg-2"
            v-for="(el, index) of new Array(20)"
            :key="index"
          >
            <p v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }} {{ meal[`strMeasure${index + 1}`] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router/composables";
import axios from "axios";
const route = useRoute();
const meal = ref({});
onMounted(() => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
    )
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    });
});
</script>

<style scoped lang="scss">
h2 {
  font-size: 40px;
}
</style>
