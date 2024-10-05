import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
type Props = {
    name: string,
    job: string,
    isSelected: boolean,
    isSelect: boolean
    onPress: () => void;
    onPressContainer:() => void
}
const CardEmploye = (props:Props) => {
    const {job, name, isSelected, onPress,isSelect, onPressContainer} = props;
  return (
    <TouchableOpacity 
    onPress={onPressContainer}
    style={styles.container}>
      {isSelected && (
        <TouchableOpacity onPress={onPress} style={{width:'10%'}}>
        {isSelect ? <Fontisto name='checkbox-active' size={24} /> : <Fontisto name='checkbox-passive' size={24} /> }
      </TouchableOpacity>
      )}
      <View style={{width: isSelected ? '90%' : '100%'}}>
        <Text style={styles.txtName}>{name}</Text>
        <Text style={styles.txtJob}>{job}</Text>
      </View>
    </TouchableOpacity>
    
  )
}

export default CardEmploye

const styles = StyleSheet.create({
    container:{
        height: 64,
        borderRadius:8,
        backgroundColor: COLORS.placeHolder50,
        marginTop: 16,
        flexDirection:'row',
        alignItems:'center',
        padding:16
    },
    txtName:{
        fontWeight: 'semibold',
        fontSize:16,
        textAlign:'center'
    },
    txtJob:{
        fontWeight: 'bold',
        fontSize:16,
        textAlign:'center'
    }
})