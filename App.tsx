import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen'
import Day1 from './src/Day1'
import Day2 from './src/Day2';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Day1" component={Day1} />
                <Stack.Screen name="Day2" component={Day2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
