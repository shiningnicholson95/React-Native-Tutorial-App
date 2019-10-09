import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease})=>{
    return(
        <View>
            <Text>{color}</Text>
            <Button 
            onPress={()=>{
                onIncrease()
                console.log(`${color} increased`)
            }
            }
            title={`Increase ${color}`}
            />
            <Button
            onPress={()=>{
                onDecrease()
                console.log(`${color}  decreased`)
            }
        }
             title={`Decreases ${color}`}
            />
        </View>
    )
}

export default ColorCounter