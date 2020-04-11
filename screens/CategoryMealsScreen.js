import React from "react";
// import {View,Text,StyleSheet,Button,FlatList} from "react-native";

import {CATEGORIES, MEALS} from "../data/dummy-data"
// import MealItem from "../components/MealItem"
import MealList from "../components/MealList"

const CategoryMealsScreen = props =>{
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  // https://techacademy.jp/magazine/14759 catIdが何番目にあるかindexofが教えてくれる。なければ、−１を返す
  // meal.categoryIds.includes(catId)でもいける

  return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoryMealsScreen.navigationOptions = (navigationData) =>{
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle:selectedCategory.title,

  }
  
}



export default CategoryMealsScreen;