import { StyleSheet, Text, TextInput as RnTextInput, View, TextInputProps, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS } from '../styles'
type Props = TextInputProps & {
  style?: ViewStyle,
  icon?: React.ReactNode
}

const TextInput = ({style, icon, ...props}:Props) => {
  return (
    <View style={styles.wp}>
        <RnTextInput 
        placeholderTextColor={COLORS.placeholder}
            style={[styles.styleTxt, style]}
            {...props}
            />
            {icon && icon}
    </View>
   
  )
}

export default TextInput

const styles = StyleSheet.create({
    wp:{
        backgroundColor:COLORS.placeHolder50,
        marginTop:12,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:32,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    styleTxt:{
        color:"#000",
        fontWeight:'medium',
        fontSize:16,
        width: '90%',
    }
})