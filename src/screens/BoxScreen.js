import React from 'react'
import {Text, View,StyleSheet} from 'react-native'

const BoxScreen = ()=>{
    return(
        <View style={styles.boxStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        marginTop: 20,
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal: 10

    },
    boxStyle:{
        borderWidth: 2,
        borderColor: "black"
    }
})

export default BoxScreen
