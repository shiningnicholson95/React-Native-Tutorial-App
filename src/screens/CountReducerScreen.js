import React, {useReducer} from 'react'
import { Text, View, Button } from 'react-native';

const reducer=(state, action)=>{
    // state === {count:0}
    //action === {type: 'increase'||'decrease', payload-additional freedom for state altering}
 switch(action.button){
     case 'increment':
     return {...state, count: state.count + action.payload}
     case 'decrement':
         return state.count-action.payload<0?state:{...state, count: state.count-action.payload}
     default: return state;
 }   
}

const CountReducerScreen=()=>{
const [state, dispatch] = useReducer(reducer,{count:0})

    return(
        <View>
                <Button
                 onPress={()=>
                    {
                        dispatch({
                            button:'increment',
                            payload: 1
                        })
                    }}
                      title="Increase"/>
                <Button
                 onPress={()=>{
                    dispatch({
                        button:'decrement',
                        payload: 1
                    })
                 }}
                title="Decrease"/>
                <Text>Current Count:</Text>
                <Text>{state.count}</Text>
        </View>
    )
}

export default CountReducerScreen