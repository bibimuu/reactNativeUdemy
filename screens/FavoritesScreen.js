import React from "react";
import {View,StyleSheet} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText"


const FavoritesScreen = props =>{

  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if(favMeals.length === 0 || !favMeals){
    return <View style={styles.content}>
      <DefaultText>No favorite Meals...</DefaultText>
    </View>
  }
  return (
    <MealList listData={favMeals} navigation={props.navigation}/>
  )
};

FavoritesScreen.navigationOptions = navData => {
  return {
  headerTitle: "Your Favorites",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item 
      title="menu" 
      iconName="ios-menu" 
      onPress={()=>{
        navData.navigation.toggleDrawer();
      }}
      />
    </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  }
})

export default FavoritesScreen;