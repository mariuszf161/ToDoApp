import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from 'react-native-vector-icons';

import Home from '../screens/Home';
import ToDoList from '../screens/ToDoList';
import AddNote from '../screens/AddNote';
import About from '../screens/About';
import { TabBarIOS } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
         <Tab.Navigator
         initialRouteName="Home"
         tabBarOptions={{
             activeTintColor: '#e91e63'
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
                name="ToDoList" 
                component={ToDoList}
                options={{
                    tabBarLabel: 'ToDo List',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="playlist-check" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="AddNote"
                component={AddNote}
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