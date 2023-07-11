import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
// @ts-ignore
import {API_URL} from "@env"
import axios from 'axios';
import AuthContext from '../../context/auth.context';

const apiUrl = API_URL


const LoginScreen = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useContext(AuthContext)

  const handleLogin = () => {
    if (email.length < 3 || password.length < 3) return
    axios.post(`${apiUrl}/auth/login`, {
        email: email,
        password: password
    }).then( async res => {
        console.log(res);
        const token = res.headers.authorization
        auth.setIsLogin(true)
        console.log(token);
        try {
            await AsyncStorage.setItem("@token", token)
        }catch(e) {
            console.log(e);
            
        }
        
    }).catch(err => {
        console.log(err.response);
        
    })
  }


  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#ecf0f1',
        justifyContent: 'space-evenly',
      }}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Bonjour</Text>
        <Text style={{color: 'black'}}>De retour !</Text>
      </View>
      <View style={{gap: 10}}>
        <Input
          label="Email"
          textColor="black"
          icon="email"
          iconColor="black"
          placeHolder="Entrez votre email"
          onTextChange={setEmail}
          textValue={email}
        />
        <Input
          label="Mot de passe"
          textColor="black"
          iconColor="black"
          placeHolder="Entrez votre mot de passe"
          icon={showPassword ? 'lock-open' : 'lock'}
          onTextChange={setPassword}
          secure={!showPassword}
          iconAction={() => setShowPassword(prev => !prev)}
          textValue={password}
        />
        <Pressable onPress={() => {}}>
          <Text style={{color: '#e67e22'}}>Mot de passe oublié ?</Text>
        </Pressable>
      </View>
      <View style={{width: '70%', alignSelf: 'center'}}>
        <TouchableOpacity
        onPress={handleLogin}
          style={{
            backgroundColor: '#e74c3c',
            padding: 10,
            borderRadius: 9,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Se connecter
          </Text>
          <Icon name="send" color={'white'} />
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
          Tu n'a pas encore de compte ?{' '}
          <Text style={{color: '#e74c3c'}} onPress={() => navigation.navigate('register')}>Inscrit toi</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
