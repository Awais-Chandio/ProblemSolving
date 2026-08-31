import React from "react"
import { View, Text,StyleSheet,Pressable, TextInput } from "react-native"

export default function Day1(){
    const[input,setInput] = React.useState('')
    const[output,setOutput] = React.useState<number | string>('')
   
    const Convert = () => {
        const number = Number(input)
        setOutput(number)
    }

    return (
        <View style={Styles.container}>
            <Text>Day1</Text>
            <TextInput
            value = {input}
            onChangeText = {setInput}
            placeholder = "Enter a String"
            >


            </TextInput>
            <Pressable
            onPress = {Convert}
            >
                <Text>Convert</Text>

            </Pressable>
            <Text>{output}</Text>
            <Text>{typeof output}</Text>

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

