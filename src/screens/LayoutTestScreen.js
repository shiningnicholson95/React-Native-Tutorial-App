import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const LayoutTestScreen = ()=>{
    return(
        <View style={styles.boxStyle}>
            <Text style={styles.child1Style}>App</Text>
            <View style={styles.child2Style}>
            <Text style={styles.subChild1Style}>Box 1</Text>
            <Text style={styles.subChild2Style}>Box 2</Text>
            <Text style={styles.subChild3Style}>Box 3</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    boxStyle:{
        flexDirection:'column',
        borderColor: 'blue',
        borderWidth: 3,
        height: 200,
        
    },
    child1Style:{
        textAlign:'center',
        borderColor: 'black',
        borderWidth: 2,
        height: 50,
    },
    child2Style:{
        height: 50,
        alignItems:'stretch',
        flexDirection: 'row',
        justifyContent:'space-between'

    },
    subChild1Style:{
        textAlign:'center',
        borderColor: 'black',
        borderWidth: 2,
        width: 50,
        backgroundColor:'red'
    },
    subChild2Style:{
        textAlign:'center',
        borderColor: 'black',
        borderWidth: 2,
        width: 50,
        backgroundColor:'green',
        top: 98
    },
    subChild3Style:{
        textAlign:'center',
        borderColor: 'black',
        borderWidth: 2,
        width: 50,
        backgroundColor:'blue'
    }  
})

export default LayoutTestScreen