import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ImageDetail = (props)=>{
    console.log(props)
        
            return(
                <View>
                    <Text style={styles.textStyle}> Picture of a {props.title}</Text>
                    <Text>Score-{props.score}</Text>
                </View>
            ) 
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
})

export default ImageDetail