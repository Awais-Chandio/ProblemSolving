import React, { useState } from "react"
import { View, Text,StyleSheet,Pressable, TextInput } from "react-native"

const Century =(year:number)=>{
let inputYear = Math.floor(year/100)
if(year%100!==0){
    inputYear = inputYear+1;
}
return inputYear  



}
export default function Day3(){
    const[input,setInput] = useState('')
    const[result,setResult] = useState<number | null>(null)

    const handleFunction =()=>{
    const year = Number(input)
    setResult(Century(year));
    }


    return (
        <View style={Styles.container}>
            <Text>Day2</Text>
            <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Enter any year you will know what's century is "
            />
        <Pressable
        onPress={handleFunction}
        >
          <Text>"Show the Century"</Text>
        </Pressable>
         <Text>
               {result},
            </Text>
            

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

