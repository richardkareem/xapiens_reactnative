import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../types/route.type'
import Header from '../../components/Header'

const EditScreen = ({navigation}: NavigationProp) => {
  const onExit = async() =>{
    await AsyncStorage.clear()
    navigation.reset({index:0, routes:[{name:'LoginScreen'}]})
  }
  return (
    <SafeAreaView style={styles.screen}>
        <Header title='Setting' icon="" />
        <Button onPress={onExit} label='Exit' style={styles.btn} />
    </SafeAreaView>
  )
}

export default EditScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  btn:{
    marginTop:32,
    marginHorizontal:32
  }
})