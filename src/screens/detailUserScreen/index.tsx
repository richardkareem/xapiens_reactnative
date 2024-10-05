import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import { RootStackParamList } from '../../types/route.type'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAppDispatch } from '../../types/redux.type'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { putData } from '../../redux/action/crud'

const DetailUserScreen = (props: NativeStackScreenProps<RootStackParamList, 'DetailUserScreen'>) => {
  const {navigation, route} = props
  const {params} = route
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({
    name:params?.name || "",
    job: params?.job || ""
  })
  const [loading, setLoading] = useState(false);
  const onChange = (value:string, key:string) =>{
    setForm(prev =>{
      return{
        ...prev,
        [key]:value
      }
    })
  }
  const handlerBack = () =>{
    navigation.goBack()
  }
  const editHandler = (id?:string) =>{
    if(id){
      dispatch(putData(setLoading, form, id, handlerBack))
    }
  }
  return (
    <SafeAreaView>
      <Header 
      icon={<Ionicons name='arrow-back' size={32} />}
      onPress={()=> navigation.goBack()} />
        <View style={styles.container}>
          <TextInput 
          value={form.name}
          onChangeText={(t) => onChange(t, 'name')} 
          placeholder='user, ex: John Doe' />
          <TextInput 
          value={form.job} 
          onChangeText={(t) => onChange(t, 'job')} 
          placeholder='position, ex: Fornt end Developer' />
          <Button 
          loading={loading}
          style={styles.btn} 
          label='Edit' 
          onPress={()=> editHandler(params?.id)} />
        </View>
    </SafeAreaView>
  )
}

export default DetailUserScreen

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  container:{
    paddingHorizontal:16
  },
  btn:{
    marginTop:16
  }
})