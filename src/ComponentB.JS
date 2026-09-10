import react, {useContext} from "react"
import { View, Text,StyleSheet,Pressable, TextInput } from "react-native"

const ComponentB = ()=>{
    const user = useContext(UserContext)
    return (
        <View style={Styles.container}>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
        </View>
    )
}
Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})