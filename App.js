import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import MapC from './screen/MapC';

const Stack = createStackNavigator();
//Main Component
const App = () => {
  return (
    //Navigation Container that control navigation between screens
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
        <Stack.Screen name="Event Address" component={MapC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
