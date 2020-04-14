import React from "react";
import {FlatList,View,StyleSheet} from "react-native";
import MealItem from "./MealItem"

const MealList = props => {
  const renderMealItem = itemData =>{
    return (
    <MealItem 
      title={itemData.item.title} 
      duration={itemData.item.duration}
      complexity={itemData.item.complexity.toUpperCase()}
      affordability={itemData.item.affordability.toUpperCase()}
      image={itemData.item.imageUrl}
      onSelectMeal={()=>{
        props.navigation.navigate({routeName:'MealDetail', params:{
          mealId: itemData.item.id,
          mealTitle: itemData.item.title
        }})
      }} 
    />
    )
  }

  return (
  <View style={styles.list}>
    <FlatList 
    data={props.listData} 
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
  )};

const styles = StyleSheet.create({
  list:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default MealList;