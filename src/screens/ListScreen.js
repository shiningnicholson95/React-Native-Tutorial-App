import React from 'react';
import {View, Text, StyleSheet,FlatList } from 'react-native';


const ListScreen = ()=>{
    const friends=[{
        key:"1",
        name:"Joey",
        quote:"How you doin?",
    },
    {   key:"2",
        name:"Rachel",
        quote:"And that my friend is, CLOSURE!!!"
    },
    { key:"3",
        name:"Ross",
        quote:"We were on a break!"
    },
    { key:"4",
        name:"Chandler",
        quote:"Can i interest you with some Sarcasm!"
    },
    { key:"5",
        name:"Phoebe",
        quote:"Smelly Cat, Smelly cat what are they feeding you?"
    },
    { key:"6",
        name:"Monica",
        quote:"I KNOWWWWWW!!"
    }]
    return(
        <View>
            <Text style={styles.textStyle}>List Screen</Text>
            <Text style={styles.headStyle}>Celebrating 25 years of <Text style={styles.friendStyle}>F.R.I.E.N.D.S</Text></Text>
            <FlatList 
            //  horizontal //this is to make your list horizontal instead of vertical scrolling.
            showsVerticalScrollIndicator={false} //Makes the scrollbar invisible while scrolling, same for horizontal as well.
             style={styles.flatListStyle}
             keyExtractor={friend=>friend.name}
             data={friends}
             renderItem = {({item})=>{
                    return <Text style={styles.mainListStyle}><Text style={styles.textStyle1}>{item.name}</Text>-{item.quote}</Text>
                }}
            />
        </View>
    )
};
const styles = StyleSheet.create({
textStyle:{
    textAlign: "center",
    color: '#87ceeb',
    fontSize:30 
},
textStyle1:{
    fontSize: 20
},
flatListStyle:{
    marginTop: 30
},
friendStyle:{
    color:'#1fffb4',
    fontSize: 25
},
headStyle:{
    fontSize: 20,
    textAlign: "center"
},
mainListStyle:{
    marginVertical: 50
}
});

export default ListScreen