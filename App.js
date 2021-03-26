import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Forecast from './screens/Forecast';




const Stack = createStackNavigator();



function NavStack() {

  return (
     <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#e0c3fc',
          },
          headerTintColor: 'black',
          headerTitleStyle :{
            fontWeight: 'bold',
            
          },
        }}
      >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home',
        headerStyle: {
          backgroundColor: '#a2b6df'
        } }}
      />
      <Stack.Screen 
        name="Forecast" 
        component={Forecast} 
        options={{title:'Forecast',
        headerStyle: {
          backgroundColor: '#a2b6df'
        }}}
        
      />
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}