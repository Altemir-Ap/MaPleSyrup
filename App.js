import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
      
      name="Map"
      component={MapScreen}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Events'}}
      />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default App;
