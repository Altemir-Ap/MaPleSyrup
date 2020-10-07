import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import MapC from './screen/MapC';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />
        <Stack.Screen name="MapC" component={MapC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
