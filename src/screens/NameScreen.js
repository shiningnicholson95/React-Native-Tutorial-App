import React,{useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native'
import { RotationGestureHandler, State } from 'react-native-gesture-handler';
const NameScreen = ()=>{
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    return(
        <View>
            <Text>
                Name Screen
            </Text>
            <TextInput
             style={styles.input}
             autoCapitalize="none"
             autoCorrect={false}
             value={name}
             onChangeText={(newValue)=>{
                setName(newValue)
             }}
              />
              <TextInput
             style={styles.input}
             autoCapitalize="none"
             autoCorrect={false}
             value={password}
             onChangeText={(newPassword)=>{
                setPassword(newPassword)
             }}
              />
              <Text>{name}</Text>
              {password.length<5?<Text>Password must be 5 characters long</Text>:null}
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
