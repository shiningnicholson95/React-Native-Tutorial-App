import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native'
import { RotationGestureHandler } from 'react-native-gesture-handler';
const NameScreen = ()=>{
    return(
        <View>
            <Text>
                Name Screen
            </Text>
            <TextInput
             style={styles.input}
             autoCapitalize="none"
             autoCorrect={false}
              />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,      
    }
})

export default NameScreen;
