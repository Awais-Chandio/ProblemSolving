import React from 'react'
import { View, Text, Pressable,StyleSheet } from 'react-native'

export default function HomeScreen( {navigation}:any) {
  return (
    <View style={Styles.container}>
        <Text>HomeScreen</Text>
        <Pressable onPress={() =>navigation.navigate("Day2")}>
            <Text>Day 2</Text>
        </Pressable>
    </View>
  )
}
const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',      
    }
})
