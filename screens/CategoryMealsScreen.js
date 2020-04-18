import React from "react";
import {View,StyleSheet} from "react-native";

import {CATEGORIES} from "../data/dummy-data"
import { useSelector } from "react-redux";
import MealList from "../components/MealList"
import DefaultText from "../components/DefaultText"

const CategoryMealsScreen = props =>{

  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  // https://techacademy.jp/magazine/14759 catIdが何番目にあるかindexofが教えてくれる。なければ、−１を返す
  // meal.categoryIds.includes(catId)でもいける

  if(displayedMeals.length === 0){
    return (
    <View style={styles.content}>
      <DefaultText>No content found</DefaultText>
    </View>
    )
  }

  return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoryMealsScreen.navigationOptions = (navigationData) =>{
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle:selectedCategory.title,

  }
  
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  }
})

export default CategoryMealsScreen;