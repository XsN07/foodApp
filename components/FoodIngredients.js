import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodIngredients = ({data}) => {
    
  return data.map((dataIng)=>(
    <View key={dataIng} style={styles.listItem}>
        <Text style={styles.itemText}>{dataIng}</Text>
    </View>
  ))
}

export default FoodIngredients

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:5,
        backgroundColor:'#f5f5f5',
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:20,
        
    },
    itemText:{
       textAlign:'center',
       fontSize:18,
    },
})