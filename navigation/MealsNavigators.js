import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {Platform} from 'react-native';
import Colors from '../constants/Colors'
import FavoriteScreen from "../screens/FavoritesScreen"

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

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
  // mode:"modal"アニメーションの変化
  // initialRouteName:"MealDetail"どのページをはじめに開きたいか決めれる
  defaultNavigationOptions: {
      headerStyle:{
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor: "white"
      },
      headerTintColor: Platform.OS === "android" ? "white": Colors.primaryColor
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals:MealsNavigator,
  Favorites:FavoriteScreen
})

export default createAppContainer(MealsFavTabNavigator);