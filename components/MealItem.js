import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.MealItem} onPress={()=>{props.onSelectMeal}}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  MealItem:{
    height:200,
    width:"100%",
    backgroundColor:"#f4f4f4",
    borderRadius:20,
    overflow:"hidden",
    marginTop:10
  },
  mealRow:{
    flexDirection:"row",
  },
  mealHeader:{
    height:"80%"
  },
  mealDetail:{
    paddingHorizontal:10,
    justifyContent:"space-between",
    alignItems:"center",
    height:"20%"
  },
  bgImage:{
    width:"100%",
    height:"100%",
    justifyContent:"flex-end"
  },
  title:{
    fontFamily:"open-sans-bold",
    fontSize:20,
    color:"white",
    textAlign:"center"
  },
  titleContainer:{
    backgroundColor:"rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal:12
  }
});

export default MealItem;