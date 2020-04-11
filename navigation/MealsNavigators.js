import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {Platform, Text} from 'react-native';
import Colors from '../constants/Colors'
import FavoriteScreen from "../screens/FavoritesScreen"
import {Ionicons} from "@expo/vector-icons"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import FiltersScreen from "../screens/FiltersScreen"

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";


const defaultStackNavOptions = {
  // mode:"modal"アニメーションの変化
  // initialRouteName:"MealDetail"どのページをはじめに開きたいか決めれる
      headerStyle:{
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor: "white"
      },
      headerTitleStyle:{
        fontFamily:"open-sans-bold"
      },
      headerBackTitleStyle:{
        fontFamily:"open-sans"
      },
      headerTintColor: Platform.OS === "android" ? "white": Colors.primaryColor
    };

const MealsNavigator = createStackNavigator({
  Categories: {
    screen:CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
    // navigationOptions: {
    //   headerStyle:{
    //     backgroundColor: Platform.OS === "android" ? Colors.primaryColor: "white"
    //   },
    //   headerTintColor: Platform.OS === "android" ? "white": Colors.primaryColor
    // }
  },
  MealDetail: {
    screen:MealDetailScreen
  }
},
{
  defaultNavigationOptions:defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites:FavoriteScreen,
  MealDetail:MealDetailScreen
},
{
  defaultNavigationOptions:defaultStackNavOptions
}
);

const tabScreenConfig = {
  Meals:{
    screen:MealsNavigator, 
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
        );
      },
      tabBarColor:Colors.primaryColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily:"open-sans-bold"}}>Meals</Text> : "Meals"
    }
  },
  Favorites:{screen:FavNavigator,navigationOptions:{
    tabBarLabel: "Favorite!",
    tabBarIcon: (tabInfo) => {
      return (
      <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
      );
    },
      tabBarColor:Colors.accentColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily:"open-sans-bold"}}>Favorites</Text> : "Favorites"
    }
  }
}

const MealsFavTabNavigator = Platform.OS === "android"
? createMaterialBottomTabNavigator(tabScreenConfig,{
  activeColor: "white",
  shifting:true
})
: createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions:{
    labelStyle:{
      fontFamily:"open-sans"
    },
    activeTintColor: Colors.accentColor
  }
});

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
},
{
  defaultNavigationOptions:defaultStackNavOptions
}
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    drawerLabel: "Meals"
  },
  Filters: FiltersNavigator
},
{
  contentOptions:{
    activeTintColor: Colors.accentColor,
    labelStyle:{
      fontFamily: "open-sans-bold"
    }
  }
});

export default createAppContainer(MainNavigator);