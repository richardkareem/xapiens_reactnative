import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../types/redux.type'
import { ScrollView } from 'react-native'
import CardEmploye from '../../components/CardEmploye'
import Header from '../../components/Header'
import { NavigationProp } from '../../types/route.type'
import { deleteData } from '../../redux/action/crud'

const HomeScreen = ({navigation}: NavigationProp) => {
  const {datas} = useAppSelector(state => state.global)
  const [toggleTrash, setToggleTrash] = useState(false);
  const [selectedDatas, setSelectedDatas] = useState<string[]>([])
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()
  const handleDelete = () =>{
    if(selectedDatas.length > 0){
      selectedDatas.forEach((id)=>{
        dispatch(deleteData(setLoading, id))
      })
    }
  }
  const onToggle = () =>{
    if(toggleTrash){
      handleDelete()
      setToggleTrash(false)
    }else{
      setToggleTrash(true)
    }
  }
  const addData = (someId: string) =>{
    setSelectedDatas((ids) =>{
      if(ids.find(id => id === someId)){
        return ids.filter((id) =>{
          if(id != someId){
            return id
          }
        })
      }else{
        return [...ids, someId]
      }
    })
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Home' onPress={onToggle} />
      {datas.length === 0 ? (
        <View style={styles.emptyCt}>
          <Text style={styles.textEmpty}>
          Data Empty
        </Text>
        </View>
        
      ): (
        <ScrollView style={styles.scrollView}>
            { datas.map(item =>{
              const isSelected = selectedDatas.some(id => id === item.id)
              return(
                <CardEmploye 
                onPressContainer={()=> navigation.navigate('DetailUserScreen', {
                  name:item?.name,
                  job:item?.job,
                  id: item?.id
                })}
                onPress={()=>{addData(item.id)}}
                isSelect={isSelected}
                isSelected={toggleTrash}
                key={item.id} 
                job={item.job} 
                name={item.name} />
            )
            })}
        </ScrollView>
       
      )}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  emptyCt:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textEmpty:{
    fontWeight:'semibold',
    fontSize:32
  },
  scrollView:{
    paddingHorizontal:16
    // alignItems:'center'
    // justifyContent:'center'
  }
})