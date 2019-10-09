import React from 'react';
import { Text, StyleSheet, View, Button,TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen
      </Text>
      <Button
        title="Go to Components Demo"
        onPress={()=>props.navigation.navigate('Components')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Images Demo"
        onPress={()=>props.navigation.navigate('Images')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Count Game Demo"
        onPress={()=>props.navigation.navigate('Game')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Color Page"
        onPress={()=>props.navigation.navigate('Color')}
      />
            <Button
        style={styles.buttonStyle}
        title="Go to Square Page"
        onPress={()=>props.navigation.navigate('Square')}
      />
      <Button
        style={styles.buttonStyle}
       title="To List Demo"
       onPress={()=>props.navigation.navigate('Lists')}
      />
      <Button
        style={styles.buttonStyle}
       title="Reducer Count Game"
       onPress={()=>props.navigation.navigate('ReducerScreen')}
      />
      <Button
        style={styles.buttonStyle}
       title="Name Display Game"
       onPress={()=>props.navigation.navigate('Name')}
      />
            <Button
        style={styles.buttonStyle}
       title="Box Layout"
       onPress={()=>props.navigation.navigate('Box')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 60
  },
  buttonStyle:{
    marginTop: 40
  }
});

export default HomeScreen;
