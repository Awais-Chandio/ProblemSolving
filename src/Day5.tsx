import React, { useState } from "react"
import { View, Text,StyleSheet,Pressable, TextInput } from "react-native"

const smash = (words:string[])=>{
    let sentence = ""
    for (let i=0;i<words.length; i++){
    if(i>0){
        sentence += " "
    }    
    sentence += words[i]
    }
return sentence
}


export default function Day5(){
    const [input,setInput] = useState('')
    const [result,setResult] = useState<string>('')

    const handleSmash =()=>{
        const words = input.split(",")
        setResult(smash(words))
    }

    return (
        <View style={Styles.container}>
            <Text>Day5</Text>
            <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Enter words separated by commas"
            />
            <Pressable
                onPress={handleSmash}
            >
                <Text>Smash</Text>
            </Pressable>
            <Text>{result}</Text>
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

