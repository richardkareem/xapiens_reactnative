import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import { CreateRequest } from '../../types/global.type'
import { useAppDispatch } from '../../types/redux.type'
import { postCreate } from '../../redux/action/crud'
import Header from '../../components/Header'

const ProfileScreen = () => {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState<CreateRequest>({
    job:'',
    name:''
  })
  const [loading, setLoading] = useState(false)
  const onChange = (key: keyof CreateRequest) => (val: string) =>{
    setForm(prev =>{
      return{
        ...prev,
        [key]: val
      }
    })
  }
  const handleClear = () =>{
    setForm({name:"", job:''})
  }
  const handleSave = () =>{
    dispatch(postCreate(form, setLoading,handleClear ))
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Profile' icon={''} />
      <View style={styles.ct}>
        <TextInput 
        onChangeText={onChange('name')}
        value={form.name}
        placeholder='name ex: John Doe' 
        />
        <TextInput 
        onChangeText={onChange('job')}
        value={form.job}
        placeholder='job ex: Front end Dev' 
        />
        <Button 
        loading={loading}
        onPress={handleSave}
        style={styles.btn} label='Save' />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  ct:{
    paddingHorizontal:32,
    marginTop:64
  },
  btn:{
    marginTop: 16
  }
})