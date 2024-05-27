<template>
  <div class="row mt-5">
    <div class="col-lg-4 mb-4" v-for="meal of meals" :key="meal.idMeal">
      <div class="bg-white shadow p-3 rounded Card">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            class="img-fluid rounded"
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
          />
        </router-link>
        <h3 class="mt-2">{{ meal.strMeal }}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. amet
          consectetur adipisicing elit.
        </p>
        <div class="border-bottom"></div>
        <div
          class="d-flex justify-content-between align-items-center pb-2 mt-4"
        >
          <a class="btn btn-danger" :href="meal.strYoutube" target="_blank"
            >YouTube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealItem",
  props: ["meals"],
};
</script>

<style scoped lang="scss">
.Card {
  transition: all 0.3s;
  &:hover {
    transform: translateY(-25px);
  }
}
</style>
