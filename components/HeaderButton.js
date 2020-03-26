import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {Platform} from "react-native";

const CustomHeaderButton = props =>{
  // console.log(props)=propsには<Item title="Favorite" iconName="ios-star" onPress={()=>{console.log("aaaaaaaaaa")}}/>が入ってる
  return <HeaderButton {...props} 
  IconComponent={Ionicons} 
  iconSize={23} 
  color={Platform.OS==="android" ? "white" :Colors.primaryColor}
  />;
};

export default CustomHeaderButton;