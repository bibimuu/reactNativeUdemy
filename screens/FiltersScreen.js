import React, {useState, useEffect,useCallback} from "react";
import {View,Text,StyleSheet,Platform,Switch} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import Colors from "../constants/Colors";

const FilterSwitch = props =>{
  return(
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch 
      value={props.state} 
      trackColor={{true:Colors.primaryColor}}
      thumbColor={Platform.OS === "android" ? Colors.primaryColor : ''}
      onValueChange={props.onChange}/>
    </View>
  )
}

const FiltersScreen = props =>{

  const {navigation} = props;

  const [isGlutenFree,setIsGlutenFree] = useState(false);
  const [isLactoseFree,setIsLactoseFree] = useState(false);
  const [isVegan,setIsVegan] = useState(false);
  const [isVegetarian,setIsVegetarian] = useState(false);

  const FilterSave = useCallback(() =>{
    const appliedItem = {
      GlutenFree: isGlutenFree,
      LactoseFree: isLactoseFree,
      Vegan: isVegan,
      Vegetarian: isVegetarian
    };
  
    console.log(appliedItem);
  },[isGlutenFree,isLactoseFree,isVegan,isVegetarian]);

  useEffect(()=>{
    navigation.setParams({save:FilterSave});
  },[FilterSave]);

  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filter</Text>
      <FilterSwitch
        label="gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="LactoseFree"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
  headerTitle: "Filter Meal",
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title="save" 
        iconName="ios-save" 
        onPress={
          navData.navigation.getParam('save')
        }
        />
      </HeaderButtons>
      )
  };
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:"center"
  },
  filterContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"80%",
    marginVertical:15
  },
  title:{
    fontFamily:"open-sans-bold",
    fontSize:22,
    margin:20,
    textAlign:"center"
  }
});

export default FiltersScreen;