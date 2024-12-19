import { StyleSheet, Text, View } from 'react-native'
import React ,{useContext} from 'react'
import { FavoritesContext } from "../store/FavoritesContex";
import { FOODS } from "../data/dummy-data";
import FoodlList from '../components/FoodlList';


const FavoritesScreen = () => {
    const favoriteFoodContext = useContext(FavoritesContext);

    const favoriteFoods = FOODS.filter((food) => favoriteFoodContext.ids.includes(food.id));
    if (favoriteFoods.length === 0 || !favoriteFoods) {
      return (
        <View style={styles.Container}>
          <Text style={styles.text}>Favorilere herhangi bir şey eklemediniz</Text>
        </View>
      );
        
    }

  return (
    <FoodlList items={favoriteFoods}/>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})