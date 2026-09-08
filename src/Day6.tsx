import React, { useState } from "react"
import { View, Text,StyleSheet,Pressable, TextInput } from "react-native"

const ArrayProduct=(arrayInput:number[])=>{
let propduct=1;
for(let i=0; i<arrayInput.length; i++){
    propduct = propduct * arrayInput[i]
}
return propduct

}


export default function Day6(){
    const[input,setInput] = useState("")
    const[result ,setResult] = useState<number>()

    const handleFunction = ()=>{
    const textinput = input.split(" ")
    setResult(ArrayProduct([]))

    }
    
    return (
        <View style={Styles.container}>
            <Text>Day6</Text>
            <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Enter Array Elements"
            >
                <Pressable
                onPress={()=>{
                    handleFunction()
                }}

                >   
                <Text>Click HERE TO Product</Text>

                </Pressable>
                <Text>
                    {result}
                </Text>

            </TextInput>
            
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

