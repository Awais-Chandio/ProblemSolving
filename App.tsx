import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen'
import Day1 from './src/Day1'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Day1" component={Day1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
