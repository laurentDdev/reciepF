/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,

  useColorScheme,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import RegisterScreen from './src/screens/auth/register.screen';
import LoginScreen from './src/screens/auth/login.screen';
import AuthScreen from './src/screens/auth/auth.screen';


const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer >
        <Stack.Navigator initialRouteName='auth' screenOptions={{headerShown: false}}>
          <Stack.Screen name='auth' component={AuthScreen}  />
          <Stack.Screen name='register' component={RegisterScreen}  />
          <Stack.Screen name='login' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}



export default App;
