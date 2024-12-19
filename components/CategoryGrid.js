import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryGrid = ({title,color,pressFood}) => {
  return (
    <View style={styles.gridItem}>
        <Pressable style={ ({pressed}) => [styles.button, pressed ? styles.buttonPressed:null]}
            onPress={pressFood}
         >
            <View style={[styles.insideView,{backgroundColor:color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
     
    </View>
  )
}

export default CategoryGrid

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        height:150,
        elevation:4,
        shadowColor:'#171717',
        shadowOffset:{width:-2,height:4},
        shadowOpacity:0.2,
        shadowRadius:4,
        borderRadius:20,
        margin:15,
        backgroundColor:'white',
    },
    button:{
        flex:1,
        
    },
    insideView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:22,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    buttonPressed:{
        opacity:0.5,
    }
})