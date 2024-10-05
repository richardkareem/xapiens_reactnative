import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getData } from '../../utils/storage'
import { RootStackParamList } from '../../types/route.type'

const SplashScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    useEffect(()=>{
       const redirect = () =>{
        setTimeout(() =>{
            getData('token').then(res =>{
                if(res){
                    navigation.reset({
                        index:0,
                        routes: [
                            {name:'MainApp'}
                        ]
                    })
                }else{
                    navigation.reset({
                        index:0,
                        routes: [
                            {name:'LoginScreen'}
                        ]
                    })
                }
            }).catch(err =>{
                console.log({err})
               
            })
        },3000)
       }
       redirect()

    },[])
  return (
    <SafeAreaView style={styles.screen}>
        <View />
      <Text style={styles.txt}>Xapiens Technical</Text>
      <Text style={styles.txt2}>Created by Richard Abdul Kareem ❤️</Text>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:32
    },
    txt:{
        fontWeight:'bold',
        fontSize:32
    },
    txt2:{
        fontWeight:'medium',
        fontSize:16,
        marginTop:64
    }
})