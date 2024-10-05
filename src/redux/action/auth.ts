import axios, { AxiosError } from "axios"
import { showMessage } from "../../utils/showMessage"
import { storeData } from "../../utils/storage"
import { API_URL } from "../../constant"
import { AuthForm, AuthResponse } from "../../types/global.type"

export const postLogin = (
    data: AuthForm, 
    setLoading:(loading:boolean)=>void,
    successRegist:()=>void
) => async() =>{
    setLoading(true)
    try{
        const res = await axios.post(`${API_URL}login`, data)
        if(res.status === 200){
            const resData : AuthResponse = res.data
            storeData('token', resData?.token)
            const profile = JSON.stringify({
                id: resData.id,
                email: data?.email,
            })
            storeData('userProfile', profile)
            showMessage('Success Login')
            successRegist()

        }
    }catch(e : unknown | Error){
        if(e instanceof Error ){
            showMessage(e.message, 'danger')
            console.log(e)
        }
    }finally{
        setLoading(false)
    }
}
export const postRegister = (data: AuthForm, setLoading:(loading:boolean)=> void, successRegist:()=>void) => async() =>{
    setLoading(true)
    try{
        const res = await axios.post(`${API_URL}register`, data)
        if(res.status === 200){
            const resData : AuthResponse = res.data
            const profile = JSON.stringify({
                id: resData?.id,
                email: data?.email,
            })
            storeData('token', resData?.token)
            storeData('userProfile', profile)
            showMessage("Success Login")
            successRegist()
        }
    }catch(e : unknown | AxiosError){
        if(e instanceof AxiosError ){
            showMessage(e?.response?.data?.error, 'danger')
        }
    }finally{
        setLoading(false)
    }
}