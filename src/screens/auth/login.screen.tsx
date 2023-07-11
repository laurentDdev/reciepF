import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/input';
const LoginScreen = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
        />
        <Pressable onPress={() => {}}>
          <Text style={{color: '#e67e22'}}>Mot de passe oublié ?</Text>
        </Pressable>
      </View>
      <View style={{width: '70%', alignSelf: 'center'}}>
        <TouchableOpacity
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
