import AsyncStorage from "@react-native-async-storage/async-storage"

export const getData = async(key:string) =>{
    try {
        return await AsyncStorage.getItem(key)
    } catch (e){
        console.log(e)
    }
}

export const storeData = async(key:string, value:string) =>{
    try{
        await AsyncStorage.setItem(key, value)
    }catch(e){

    }
}
export const deleteData = async(key:string) =>{
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        
    }
}