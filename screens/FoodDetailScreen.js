import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import FoodIngredients from '../components/FoodIngredients';
import { FOODS } from "../data/dummy-data";
import { useLayoutEffect,useContext } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FavoritesContext } from "../store/FavoritesContex";

const FoodDetailScreen = ({ route, navigation }) => {
  const favoriteFoodContext = useContext(FavoritesContext);
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);

  
  const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);

  const pressHandler = () => {
    // Favori durumunu tersine çevir
    setIsFavorite((prevState) => !prevState);
  };

  function changeFavorite() {
    if (foodIsFavorite) {
      favoriteFoodContext.removeFavorite(foodId);
    } else {
      favoriteFoodContext.addFavorite(foodId);
    }
    
  }

  useLayoutEffect(() => { 
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={pressHandler}
            style={({ pressed }) => [
              styles.pressed, 
              pressed && styles.hover
            ]}
          >
           
            <MaterialIcons 
              name={foodIsFavorite ? "favorite" : "favorite-border"} 
              size={24} 
              color={foodIsFavorite ? "red" : "white"} 
              onPress={changeFavorite}
            />
          </Pressable>
        );
      }
    });
  }, [navigation,changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedFood.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.ListContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
  ListContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  rootContainer: {
    marginBottom: 30,
  },
  subTitle: {
    color: '#ff8300',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitleContainer: {
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ff8300',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailItem: {
    marginHorizontal: 12,
    fontSize: 16,
    fontFamily: "monospace",
    color: '#b26fff',
  },
  pressed: {
    opacity: 0.7, // Butona basıldığında hafif opaklık
  },
  hover: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)', // Hover efektinde kırmızı arka plan
  },
});
