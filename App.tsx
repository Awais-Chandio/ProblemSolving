import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen'
import Day1 from './src/Day1'
import Day2 from './src/Day2';
import Day3 from './src/Day3';
import Day4 from './src/Day4';
import Day5 from './src/Day5';
import Day6 from './src/Day6';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Day1" component={Day1} />
                <Stack.Screen name="Day2" component={Day2} />
                <Stack.Screen name="Day3" component={Day3} />
                <Stack.Screen name="Day4" component={Day4} />
                <Stack.Screen name="Day5" component={Day5} />
                <Stack.Screen name='Day6' component={Day6} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
