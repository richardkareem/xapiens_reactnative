import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import { postRegister } from '../../redux/action/auth'
import { AppDispatch } from '../../types/redux.type'
import { NavigationProp } from '../../types/route.type'
import Entypo from 'react-native-vector-icons/Entypo'
import { COLORS } from '../../styles'
import { AuthForm } from '../../types/global.type'

const RegisterScreen = ({navigation}:NavigationProp) => {
  const dispatch = useDispatch<AppDispatch>()
  const [form, setForm] = useState({
    email:"",
    password:'',
  })
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(false)
  const handleRegister = () =>{
    dispatch(postRegister(form,setLoading, successRegist))
  }
  const onchange = (type: keyof AuthForm) => (text:string)=> {
    setForm(prev =>{
      return{
        ...prev,
        [type]: text
      }
    })
  }
  const successRegist = () =>{
    navigation.reset({index:0, routes:[{name:'MainApp'}]})
  }
  return (
    <SafeAreaView style={styles.screen}>
    <View style={styles.wp}>
      <Text style={styles.text32BlackSemi}>Register</Text>
      <TextInput onChangeText={onchange('email')} value={form.email} placeholder='Email'  />
      <TextInput onChangeText={onchange('password')} value={form.password} secureTextEntry={!active} placeholder='Password'  icon={
         <TouchableOpacity onPress={()=> setActive(prev => !prev)}>
         {active ? <Entypo name='eye-with-line' size={24} /> : <Entypo name='eye' size={24} />}
       </TouchableOpacity>
      } />
      <View style={styles.desc}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
         <Text style={{color: COLORS.blueIos}}>Login</Text>
        </TouchableOpacity>
      </View>
      <Button 
      loading={loading}
      style={styles.gap} onPress={handleRegister} label='Register' />

    </View>
  </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center"
  },
  wp:{
    paddingHorizontal:16
  },
  desc:{
  flexDirection:"row",
    marginTop:16,
    justifyContent:"center",
    marginVertical:16
  },
  text32BlackSemi:{
    fontWeight:"bold",
    fontSize:32,
    textAlign:'center',
    marginBottom:32
  },
  gap:{
    marginTop: 16
  },

})