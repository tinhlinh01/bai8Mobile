import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhoneInput from './PhoneInput';  // Path to PhoneInput component
import HomeScreen from './HomeScreen';  // Path to HomeScreen component
import ScanScreen from './ScanScreen';  // Path to ScanScreen component
import { Ionicons } from '@expo/vector-icons';  // Optional for icons, if using Expo

const homeIcon = require('./assets/HomeIcon.png');
const scanIcon = require('./assets/ScanIcon.png');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator with Home and Scan screens
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;
          if (route.name === 'HomeScreen') {
            iconSource = homeIcon;  // Use home icon for HomeScreen
          } else if (route.name === 'ScanScreen') {
            iconSource = scanIcon;  // Use scan icon for ScanScreen
          }
          return (
            // Use the Image component to display the icon
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: color, // Dynamically change color based on active/inactive state
              }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'Scan' }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneInput">
        {/* PhoneInput is the first screen for login */}
        <Stack.Screen name="PhoneInput" component={PhoneInput} options={{ title: 'Phone Input' }} />
        {/* Once logged in or passed the input, show the Tab Navigator */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }} // Hide the header for the bottom tab screens
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
