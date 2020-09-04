import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home'
import Add from './components/Add'
import Item from './components/Item'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={header} />
        <Stack.Screen name='Add' component={Add} options={header}/>
        <Stack.Screen name='Item' component={Item} options={header}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const header = {
  headerStyle: { backgroundColor: '#69BF93' },
  headerTintColor: '#ffffff'
}

export default App;
