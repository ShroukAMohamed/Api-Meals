<script setup>
import { computed, watch } from "vue";
import store from "@/store";
import { useRoute } from "vue-router/composables";
import { onMounted } from "vue";
import MealItem from "@/components/MealItem.vue";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.getters.mealsByLetter);
const route = useRoute();
watch(route, () => {
  store.dispatch("search_by_letter", route.params.letter);
});
onMounted(() => {
  store.dispatch("search_by_letter", "W");
});
</script>

<template>
  <div class="search-letter">
    <div class="container">
      <div class="row mt-5">
        <div
          class="d-flex justify-content-center align-items-center gap-3 mt-3"
        >
          <router-link
            class="letters"
            :to="{ name: 'byLetter', params: { letter } }"
            v-for="letter of letters"
            :key="letter"
          >
            {{ letter }}
          </router-link>
        </div>
      </div>
      <meal-item :meals="meals" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.letters {
  text-decoration: none;
  color: black;
  font-size: 25px;
  transition: all 0.2s;
  &:hover {
    color: #d22525;
    transform: scale(1.5);
  }
}
.Card {
  transition: all 0.3s;
  &:hover {
    transform: translateY(-20px);
  }
}
</style>
