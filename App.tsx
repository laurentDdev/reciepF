/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useContext} from 'react';
import axios from "axios"
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import RegisterScreen from './src/screens/auth/register.screen';
import LoginScreen from './src/screens/auth/login.screen';
import AuthScreen from './src/screens/auth/auth.screen';
import AuthContext from './src/context/auth.context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator()

// @ts-ignore
import {API_URL} from "@env"

const apiUrl = API_URL

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };
  
  const auth = useContext(AuthContext)

  
  useEffect(() => {
    AsyncStorage.getItem("@token").then(token => {
      axios.post(`${apiUrl}/auth/autologin`, {}, {
        headers: {
          Authorization: token
        }
      }).then(res => {
        console.log(res);
        if (res.status == 200) {
          auth.setIsLogin(true)
        }
      }).catch(err => {
        console.log(err.response);
        
      })
    }).catch(err => {
      auth.setIsLogin(false)
    })
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer >
        {!auth.isLogin ? ( <Stack.Navigator initialRouteName='auth' screenOptions={{headerShown: false}}>
          <Stack.Screen name='auth' component={AuthScreen}  />
          <Stack.Screen name='register' component={RegisterScreen}  />
          <Stack.Screen name='login' component={LoginScreen} />
        </Stack.Navigator>
        ) : <Text>Pas connecter</Text>}
      </NavigationContainer>
    </SafeAreaView>
  );
}



export default App;
