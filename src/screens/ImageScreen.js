import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'
const ImageScreen = ()=>{
    return(
        <View>
            <ImageDetail title="forest" score="8"/>
            <ImageDetail title="deer" score="7"/>
            <ImageDetail title="Waterfall" score="9"/>
            <ImageDetail title="Hut" score="10"/>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
})

export default ImageScreen