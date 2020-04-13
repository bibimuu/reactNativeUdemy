import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import {AppLoading} from "expo";
import MealsNavigator from "./navigation/MealsNavigators"
import {useScreens} from "react-native-screens"
import {Provider} from "react-redux";

import {createStore, combineReducers} from "redux";
import mealReducer from "./store/reducers/meals";

useScreens();

const rootReducer = combineReducers({
  meals:mealReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans" : require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./assets/Fonts/OpenSans-Bold.ttf")
  });
}

export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);
  if(!fontLoaded){
    return (
    <AppLoading 
    startAsync={fetchFonts} 
    onFinish={()=>setFontLoaded(true)}
    />
    );
  }

  return <Provider store={store}><MealsNavigator/></Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
