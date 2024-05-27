export default {
  setSearchMeals(state, meals) {
    state.searchedMeals = meals || [];
  },
  setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || [];
  },
  setMealsByIngredients(state, meals) {
    state.mealsByIngredient = meals || [];
  },
};
