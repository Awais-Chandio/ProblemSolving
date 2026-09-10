import react, { createContext} from "react"
import { View, Text,StyleSheet,Pressable, TextInput } from "react-native"
export const UserContext = createContext({name:"",age:0})

const ComponentB = ()=>{
    return (
        <UserContext.Provider value={{ name: "John", age: 30 }}>
            <ComponentB />
        </UserContext.Provider>
    )
}


Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})