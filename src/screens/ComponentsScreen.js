import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ComponentsScreen = ()=>{
    const name="ashish"// cant show js object in a text element.
    const quote=<Text style={styles.textStyle2}>This text was rendered by assigning the Text tag to a variable and calling it in View.</Text>
return(
    <View>
           <Text style={styles.textStyle}> Getting started with React Native!</Text>
           <Text style={styles.textStyle1}>My name is {name}</Text>
    </View>
    
)
};

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 45,
        color: "purple"
    },
    textStyle1:{
        fontSize: 20,
        marginTop: 40,
        color: "blue",
        "textAlign":"center"
    },
    textStyle2:{
        marginTop: 40
    }
})

export default ComponentsScreen