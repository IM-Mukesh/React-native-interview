import React, {useEffect} from 'react';
import Homepage from './Homepage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './LoginPage';
import BioPage from './BioPage';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bio"
          component={BioPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
