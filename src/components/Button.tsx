import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
    label:string,
    onPress?: ()=> void,
    style?: ViewStyle,
    loading?: boolean

}
const Button = (props : Props) => {
    const {label, onPress, style, loading} = props
  return (
    <TouchableOpacity disabled={loading} onPress={onPress}  style={[styles.wp, style]}>
        {loading ? <ActivityIndicator color={"#fff"} size={'small'} /> : <Text style={styles.txt}>{label}</Text>}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    wp:{
        backgroundColor:"#000",
        borderRadius: 32,
        paddingVertical:16,
        alignItems:'center',
    },
    txt:{
        fontWeight:'semibold',
        fontSize:16,
        color:'#FFF'
    }
})