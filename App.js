import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import FriendsScreen from './screens/FriendsScreen';
import AddFriendScreen from './screens/AddFriendScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// De fire hovedskærme ligger som faner i bunden
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1e5fd9',
        tabBarIconStyle: { display: 'none' },
        tabBarLabelStyle: { fontSize: 14, paddingBottom: 10 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'SkiTracker', tabBarLabel: 'Hjem' }} />
      <Tab.Screen name="Map" component={MapScreen} options={{ title: 'Kort', tabBarLabel: 'Kort' }} />
      <Tab.Screen name="Friends" component={FriendsScreen} options={{ title: 'Venner', tabBarLabel: 'Venner' }} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} options={{ title: 'Rangliste', tabBarLabel: 'Rangliste' }} />
    </Tab.Navigator>
  );
}

// Stack-navigationen ligger udenom, så AddFriend åbner ovenpå fanerne
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="AddFriend" component={AddFriendScreen} options={{ title: 'Tilføj ven' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}