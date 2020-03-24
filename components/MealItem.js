import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...style.mealHeader}}>
            <Text>{props.title}</Text>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}</Text>
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
    backgroundColor:"#ccc"
  },
  mealRow:{
    flexDirection:"row",
  },
  mealHeader:{
    height:"90%"
  },
  mealDetail:{

  }
});

export default MealItem;