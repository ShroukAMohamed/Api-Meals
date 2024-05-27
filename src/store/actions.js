import axios from "axios";

export default {
  async load_meal_list() {
    await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
  },
  async search_by_keyword({ commit }, keyword) {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(({ data }) => {
        commit("setSearchMeals", data.meals);
      });
  },
  async search_by_letter({ commit }, letter) {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(({ data }) => {
        commit("setMealsByLetter", data.meals);
      });
  },
  async search_by_ingredient({ commit }, ing) {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
      .then(({ data }) => {
        commit("setMealsByIngredients", data.meals);
      });
  },
};
