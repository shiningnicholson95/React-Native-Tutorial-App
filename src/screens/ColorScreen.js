import React, {useState} from 'react'
import {FlatList, View, Button, StyleSheet} from 'react-native'
const ColorScreen = ()=>{
    [colors, setColors] = useState([]);
    console.log(colors)
    console.log(setColors)
    return(
        <View>
                <Button title="add a color" onPress={()=>{
                    setColors([...colors,randomRGB()]);
                }}
                />
        <View 
        style={{height: 100, width: 100, backgroundColor:randomRGB(),marginTop: 30}}
        />
        
        <FlatList
            keyExtractor={(item)=>item}
            data={colors}
            renderItem={({item})=>{
                return <View style={{height:100, width:100, backgroundColor: item}} />
            }}
        />
        </View>
            
        
    )
}
const randomRGB = ()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // const red = Math.floor(Math.random() * 256);
    // const red = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green},${blue})`
}
const styles= StyleSheet.create({
    style:{
        marginTop: 40
    }
})

export default ColorScreen