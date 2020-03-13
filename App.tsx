import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ToDoList} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is home page</Text>
    </View>
  );
}
function ToDoList(){
  return (
    <View style={{flex: 2, alignItems: 'flex-start', justifyContent: 'center'}}>
      <Text>This is a works page </Text>
    </View>
  );
}

function About(){
  return (
    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
      <Text>This page is about me </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    flexDirection: 'row',
    height: 100,
    padding: 20,
  },
});
