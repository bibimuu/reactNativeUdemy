import React from "react";
import {View,Text,StyleSheet,Button,FlatList} from "react-native";

import {CATEGORIES, MEALS} from "../data/dummy-data"
import MealItem from "../components/MealItem"

const CategoryMealsScreen = props =>{
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  // https://techacademy.jp/magazine/14759 catIdが何番目にあるかindexofが教えてくれる。なければ、−１を返す
  // meal.categoryIds.includes(catId)でもいける

  const renderMealItem = itemData =>{
    return <MealItem 
      title={itemData.item.title} 
      duration={itemData.item.duration}
      complexity={itemData.item.complexity.toUpperCase()}
      affordability={itemData.item.affordability.toUpperCase()}
      image={itemData.item.imageUrl}
      onSelectMeal={()=>{
        props.navigation.navigate({routeName:'MealDetail', params:{
          mealId: itemData.item.id
        }})
      }} 
    />
  }

  return(
    <View style={styles.screen}>
      <FlatList 
      data={displayedMeals} 
      renderItem={renderMealItem}
      style={{width:"95%"}}
      />
      {/* <Text>CategoryMealsScreen </Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="go to Meals Detail" onPress={()=>{
        props.navigation.navigate("MealDetail");
        // props.navigation.push("CategoryMealsScreen");
        // →pushにすることで同じ画面に来ることができる。navigateでは不可能。
      }}/>
      <Button title="go back to category" onPress={()=>{
        props.navigation.goBack()
        // props.navigation.pop() stackNavigatorの中でしか使えないがgoBackは他のnavigatorでも使える。
      }}/> */}
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) =>{
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle:selectedCategory.title,

  }
  
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default CategoryMealsScreen;