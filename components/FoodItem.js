import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FoodItem = ({ id, title, imageUrl, affordability, complexity }) => {

    const navigation = useNavigation();
  return (
    <View style={styles.foodItem}>
      <Pressable style={ ({pressed}) => [pressed ? styles.buttonPressed:null]} 
       onPress={()=>navigation.navigate('FoodDetail',{foodId:id})}>
        <View style={styles.innerView}>
          <View>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text  style={styles.detailItem}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
    foodItem: {
      margin: 15,
      backgroundColor: '#e0e0e0',
      borderRadius:12,
      elevation:4,
        shadowColor:'#171717',
        shadowOffset:{width:-2,height:4},
        shadowOpacity:0.2,
        shadowRadius:4,
    },
    innerView:{

    },
    image:{
        width: '100%',
        height: 200,
        borderRadius:8,
    },
    title:{
      textAlign:'center',
      fontSize:18,
        fontWeight:'bold',
        marginVertical:8,
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginBottom:10,
    },

    detailItem:{
       marginHorizontal:10,
       fontSize:16,
    },
    buttonPressed:{
        opacity:0.5,
    }
});
