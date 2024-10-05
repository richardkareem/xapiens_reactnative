import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import { storeData } from '../../utils/storage'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'

import { postLogin } from '../../redux/action/auth'
import { AppDispatch } from '../../types/redux.type'
import { NavigationProp } from '../../types/route.type'
import { COLORS } from '../../styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { AuthForm } from '../../types/global.type'
const LoginScreen = ({navigation}: NavigationProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState<AuthForm>({
    email:'',
    password:''
  })
  const [loading, setLoading] = useState(false)
  const handleLogin = () =>{
     dispatch(postLogin(form, setLoading, onSuccess))
  }
  const onSuccess = () =>{
    navigation.reset({index:0, routes:[{name:'MainApp'}]})
  }
  const onChange = (key: keyof AuthForm) => (text:string)=>{
    setForm(prev =>{
      return{
        ...prev,
        [key]: text
      }
    })
  }
  const [active, setActive] = useState(false)
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.wp}>
        <Text style={styles.text32BlackSemi}>Login</Text>
        <TextInput 
        onChangeText={onChange('email')} 
        value={form.email}
        placeholder='Email' 
        style={{marginTop:8}} />
        <TextInput 
        onChangeText={onChange('password')}
        value={form.password}
        secureTextEntry={!active}
        placeholder='Password' 
        style={{marginTop:8}} 
        icon={
          <TouchableOpacity onPress={()=> setActive(prev => !prev)}>
            {active ? <Entypo name='eye-with-line' size={24} /> : <Entypo name='eye' size={24} />}
          </TouchableOpacity>
        } />
        <View style={styles.desc}>
          <Text>Don&apos;t have account? </Text>
          <TouchableOpacity  onPress={()=>{navigation.navigate('RegisterScreen')}}>
            <Text style={{color:COLORS.blueIos}}>Register</Text>
          </TouchableOpacity>
        </View>
        <Button loading={loading} style={styles.gap} onPress={handleLogin} label='Login' />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

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