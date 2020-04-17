import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVORITE} from "../actions/meals";

const initialState = {
  meals:MEALS,
  filteredMeals:MEALS,
  favoriteMeals:[]
};

const mealReducer = (state=initialState,action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal=>meal.id === action.mealId);
      if(existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
          // [...state.favoriteMeals]にするわけは、同じところを参照したオブジェクトを変更せずに、
          // 別のオブジェクトを生成して変更するため。  (JSのルール)
        updatedFavMeals.splice(existingIndex, 1);
        return {
          ...state, 
          favoriteMeals: updatedFavMeals}
      } else {
        const meal = state.meals.find(meal=> meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal)
        }
      }
    default:
      return state;
  }
  return state;
} 

export default mealReducer;