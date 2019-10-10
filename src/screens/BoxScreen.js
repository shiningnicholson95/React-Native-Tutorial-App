import React from 'react'
import {Text, View,StyleSheet} from 'react-native'

const BoxScreen = ()=>{
    return(
        <View style={styles.boxStyle}>
            <Text style={styles.textParticularStyle1}>Child#1</Text>
            <Text style={styles.textParticularStyle2}>Child#2</Text>
            <Text style={styles.textParticularStyle3}>Child#3</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textParticularStyle1:{
        borderWidth: 3,
        borderColor: "yellow",
        

    },
    textParticularStyle2:{
        borderWidth: 3,
        borderColor: "yellow",
    },
    textParticularStyle3:{
        borderWidth: 3,
        borderColor: "yellow",
        ...StyleSheet.absoluteFillObject

    },
    boxStyle:{
        borderWidth: 3,
        borderColor: "black",
        height: 200,
        alignItems: 'stretch'
        
    }
})

export default BoxScreen
