import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import FoodItem from "./FoodItem";

export default function FoodlList({ items }) {
  function renderFoodItem(itemData) {
    console.log(itemData);
    const foodItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      
    };
    return <FoodItem {...foodItemProps} />;
  }
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
