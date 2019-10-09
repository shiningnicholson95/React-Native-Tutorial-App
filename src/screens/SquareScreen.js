import React, {useReducer} from 'react'
import {View, Text, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter'
const COLOR_INCREMENT = 30;
const reducer = (state, action)=>{
    //state === {red:number, blue: number, green: number}
    //action === {colorToChange:'red'||'green'||'blue', payload: 15||-15}
    switch (action.colorToChange) {
        case 'red':
                if(state.red+action.payload>255||state.red+action.payload<0){
                    return state;
                }
        return {...state, red: state.red+action.payload};
        
        case 'blue':
                if(state.blue+action.payload>255||state.blue+action.payload<0){
                    return state;
                }
        return {...state, blue: state.blue+action.payload};
        
        case 'green':
        return state.green+action.payload>255||state.green+action.payload<0?state:{...state, green: state.green+action.payload};

        default:
        return state;
    }
}
const SquareScreen = ()=>{
    // const [red, setRed] = useState(0)
    // const [green, setGreen] = useState(0)
    // const [blue, setBlue] = useState(0)
    const [state, dispatch] = useReducer(reducer, {red:0, blue:0, green:0});
    //below are state checks for each color.
    console.log(`red: ${state.red}`);
    console.log(`blue: ${state.blue}`);
    console.log(`green: ${state.green}`);
    // const setColorHelper = (color, change)=>{
    
    
    // //Better way switch statement:
    // switch(color){
    //     case 'red':
    //         red+change>255||red+change<0?null:setRed(red+change)
    //         return;
        
    //     case 'blue':
    //     blue+change>255||blue+change<0?null:setBlue(blue+change)
    //     return;

    //     case 'green':
    //     green+change>255||green+change<0?null:setGreen(green+change)
    //     return;
    // }

    /*BELOW WAS AN IF ELSY METHOD: CUMBERSOME!*/
    
        //     if(color==='red'){
    //         if(red+change>255||red+change<0){
    //             return;
    //         }else{
    //             setRed(red+change)
    //         }
    //     } else if(color==="blue"){
    //         if(blue+change>255||blue+change<0){
    //             return;
    //         }else{
    //             setBlue(blue+change)
    //         }
    //     } else{
    //         if(green+change>255||green+change<0){
    //             return;
    //         }else{
    //             setGreen(green+change)
    //         }
    // }
// }
    return(
        <View>
        <Text>Square Screen</Text>
        <ColorCounter 
        onIncrease={()=>
                {
                    dispatch({
                        colorToChange: 'red',
                        payload: COLOR_INCREMENT
                     })
                    // setColorHelper('red',COLOR_INCREMENT)
                    // if(red+COLOR_INCREMENT>255){
                    //     return;
                    // }
                    // setRed(red+COLOR_INCREMENT)
                }
                }
        onDecrease={()=>
            {
                dispatch({
                    colorToChange: 'red',
                    payload: -1*COLOR_INCREMENT
                 })
                // setColorHelper('red',-1*COLOR_INCREMENT)
            // if(red-COLOR_INCREMENT<0){
            //     return;
            // }
            // setRed(red-COLOR_INCREMENT)
        }
            
        }
        color="Red" />
        <ColorCounter 
        onIncrease={()=>
            {
                dispatch({
                    colorToChange: "blue",
                    payload: COLOR_INCREMENT
                 })
                // setColorHelper('blue',COLOR_INCREMENT)
                // if(blue+COLOR_INCREMENT>255){
                //     return;
                // }
                // setBlue(blue+COLOR_INCREMENT)}
            }}
            
        onDecrease={()=>{
            dispatch({
                colorToChange: "blue",
                payload: -1*COLOR_INCREMENT
             })
            // if(blue-COLOR_INCREMENT<0){
            //     return;
            // }
            // setBlue(blue-COLOR_INCREMENT)
        }    
        }
        color="Blue" />
        <ColorCounter 
        onIncrease={()=>{
            dispatch({
                colorToChange: "green",
                payload: COLOR_INCREMENT
             })
            // setColorHelper('green',COLOR_INCREMENT)
            // if(green+COLOR_INCREMENT>255){
            //     return;
            // }
            // setGreen(green+COLOR_INCREMENT)
        }
            
        }
        onDecrease={()=>{
            dispatch({
                colorToChange: "green",
                payload: -1*COLOR_INCREMENT
             })
            // setColorHelper('green',-1*COLOR_INCREMENT)
            // if(green-COLOR_INCREMENT<0){
            //     return;
            // }
            // setGreen(green-COLOR_INCREMENT)
        }

        }
         color="Green" />
        <View style={{height: 150, width: 150, marginTop: 40, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}} />
        <Button title="Reset All Colors" onPress={()=>{
            setRed(red-red),
            setBlue(blue-blue),
            setGreen(green-green)
        }} /> 
        </View>
    )
}


export default SquareScreen