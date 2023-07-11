import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons"

// @ts-ignore
import chef from '../../assets/chef.png';
// @ts-ignore
import bg from '../../assets/bg.jpg';




export default function AuthScreen({navigation}: any) {
  return (
    <ImageBackground
      source={bg}
      style={styles.container}
      resizeMode="cover"
      resizeMethod="resize"
      imageStyle={{opacity: 0.7}}>
      <View style= {{alignItems: 'center'}}>
        <Image source={chef} resizeMode="cover" height={100} style={{ height: 100, width: 100}} />
        <Text style={{color: 'white', fontWeight: 'bold'}}>Découvre plein de recettes 100+</Text>
      </View>
      <View style={styles.buttons}>
        <View>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            Tu veux cuisiner
          </Text>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Découvre nos recettes simples
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonText}>Commencer</Text>
          <Icon color={'white'} name='send'/>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    textAlign: 'center',
  },
  buttons: {
    gap: 10,
    width: '70%',
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
