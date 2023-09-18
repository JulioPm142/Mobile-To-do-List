import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/Pages/HomeScreen/HomeScreen'; // Import your HomeScreen component
import NewPage from './Components/Pages/TestPage/NewPage'
const Stack = createStackNavigator();


const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home"> {/* Specify "Home" as the initial route */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewPage" component={NewPage} /> {/* Add this line */}
      {/* Add more screens here if needed */}
    </Stack.Navigator>
  );
};
