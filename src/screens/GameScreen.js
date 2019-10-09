import React, {useState} from 'react'
import { Text, StyleSheet, View, Button,TouchableOpacity } from 'react-native';

const GameScreen=(props)=>{
    const [counter, setCounter] = useState(0);

    return(
        <View>
                <Button onPress={()=>{setCounter(counter+1);console.log("+")}} title="Increase"/>
                <Button onPress={()=>{setCounter(counter-1);console.log("-")}} title="Decrease"/>
                <Text>Current Count:</Text>
                <Text>{counter}</Text>
        </View>
    )
}

export default GameScreen