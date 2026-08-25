import React from "react"
import { View, Text,StyleSheet,Pressable } from "react-native"

export default function Day1(){
    const Task1 =()=>{
        const array = [1,2,3,4,5,6,7,8,9,10]
        let evenDouble = []
        for(let i=0; i<array.length; i++){
            if(array[i]%2===0){
                evenDouble.push(array[i]*2)
            }
        }
        console.log(evenDouble)

    }

    
    return (
        <View style={Styles.container}>
            <Pressable onPress={Task1}>
                <Text>CLick here for task 1</Text>
            </Pressable>
        </View>
    )
};

const Styles = StyleSheet.create({   
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',      
    }
});

