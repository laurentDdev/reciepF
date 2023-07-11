import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/input';
import Icon from 'react-native-vector-icons/MaterialIcons';

// @ts-ignore
import {API_URL} from "@env"
import axios from 'axios';

const apiUrl = API_URL

const RegisterScreen = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [pseudo, setPseudo] = useState<string>("")
  const [messageError, setMessageError] = useState("")

  const handleRegister = () => {
    if (password.length < 5) return setMessageError("Mot de passe invalide")
    if (password !== confirmPassword) return setMessageError("Les mot de passe ne corresponde pas")
    if (pseudo.length < 3) return setMessageError("Pseudo invalide")
    
    axios.post(`${apiUrl}/auth/register`, {
        email: email,
        password: password,
        pseudo: pseudo
    }).then(res => {
    
        if (res.status == 200) {
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setPseudo("")
            navigation.navigate("login")
        }
        
    }).catch(err => {
        console.log(err.response);
        setMessageError(err.response.data.message || "erreur")
        
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
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Crée un compte</Text>
        <Text style={{color: 'black'}}>
          Tu as du mal a crée ton compte ? prend ton temps
        </Text>
      </View>
      <View style={{gap: 10}}>
      <Input
          label="Pseudo"
          textColor="black"
          icon="people"
          iconColor="black"
          placeHolder="Entrez votre pseudo"
          onTextChange={setPseudo}
          textValue={pseudo}
        />
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
        <Input
          label="Confirmez votre mot de passe"
          textColor="black"
          iconColor="black"
          placeHolder="Entrez a nouveau votre mot de passe"
          icon={showConfirmPassword ? 'lock-open' : 'lock'}
          onTextChange={setConfirmPassword}
          secure={!showConfirmPassword}
          iconAction={() => setShowConfirmPassword(prev => !prev)}
          textValue={confirmPassword}
        />
        {messageError.length > 0 && <Text style={{color: 'red'}}>{messageError}</Text>}

      </View>
   
      <View style={{width: '70%', alignSelf: 'center'}}>
        <TouchableOpacity
        onPress={handleRegister}
          style={{
            backgroundColor: '#e74c3c',
            padding: 10,
            borderRadius: 9,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>S'inscrire</Text>
          <Icon name="send" color={'white'} />
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
          Déja inscrit ?{' '}
          <Text
            style={{color: '#e74c3c'}}
            onPress={() => navigation.navigate('login')}>
            Connecte toi
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
