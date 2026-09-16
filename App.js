import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import FriendsScreen from './screens/FriendsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'SkiTracker' }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'Kort' }}
        />
        <Stack.Screen
          name="Friends"
          component={FriendsScreen}
          options={{ title: 'Venner' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
