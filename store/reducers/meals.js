import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVORITE, SET_FILTERS} from "../actions/meals";

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
    case SET_FILTERS:
      const appliedFilter = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if(appliedFilter.GlutenFree && !meal.isGlutenFree){
          return false;
        }
        if(appliedFilter.LactoseFree && !meal.isLactoseFree){
          return false;
        }
        if(appliedFilter.Vegetarian && !meal.isVegetarian){
          return false;
        }
        if(appliedFilter.Vegan && !meal.isVegan){
          return false;
        }
        return true;
      });

      return {
        ...state,
        filteredMeals: updatedFilteredMeals
      };
    default:
      return state;
  }
  return state;
} 

export default mealReducer;