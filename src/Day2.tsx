import React from "react"
import { View, Text,StyleSheet,Pressable, TextInput } from "react-native"



const digitalize = (num:number)=>{
        
        const result = []
        while(num>0){
            const lastdigit = num%10
            num = Math.floor(num/10)
            result.push(lastdigit)
        }
        return result
    }

export default function Day2(){
    const[input,setInput] = React.useState('')
    const[outout,setOutput] = React.useState<number[] | string>([])

        const handledigitalize=()=>{
            const num = parseInt(input)
            if(isNaN(num)){
                setOutput('Please enter a valid number')
            }else{
                setOutput(digitalize(num))
            }

        }
    
    
    

    return (
        <View style={Styles.container}>
            <Text>Day2</Text>
           <TextInput
           value = {input}
           onChangeText = {setInput}
           placeholder = "Enter a Number"
           keyboardType = "numeric"
           >
            <Pressable onPress={handledigitalize}>
                <Text>Convert</Text>
            </Pressable>
            <Text>{outout}</Text>

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

