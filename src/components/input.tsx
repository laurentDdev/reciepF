import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"

type props = {
    label: string
    textColor: string
    textValue: string
    placeHolder?: string
    icon?: string
    iconColor?: string
    onTextChange: any
    secure?: boolean
    iconAction?: any
}


export default function Input({label,textValue, textColor, placeHolder, icon, iconColor, onTextChange, secure = false, iconAction}: props) {
  return (
    <View>
    <Text style={{color: textColor, fontWeight: 'bold'}}>{label}</Text>
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 0.3,
        borderRadius: 9,
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      <TextInput value={textValue} style={{flex: 1}} placeholder={placeHolder} onChangeText={onTextChange} secureTextEntry={secure} />
      {icon && <Icon name={icon} color={iconColor} onPress={iconAction} />}
    </View>
  </View>
  )
}