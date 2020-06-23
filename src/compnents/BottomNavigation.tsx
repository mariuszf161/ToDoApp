import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from 'react-native-vector-icons';

import Home from '../screens/Home';
import About from '../screens/About';
import { TabBarIOS } from 'react-native';
import TodoListScreen from '../screens/TodoList';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
         <Tab.Navigator
         initialRouteName="Home"
         tabBarOptions={{
             activeTintColor: '#0066FF',

         }}
         >
             <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="AddNote"
                component={TodoListScreen}
                options={{
                    tabBarLabel: 'Create Note',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="plus" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    )
                }}
            />
         </Tab.Navigator>
    )
}
export default BottomTabs