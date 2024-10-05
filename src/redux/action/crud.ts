import axios from "axios"
import { API_URL } from "../../constant"
import { storeData } from "../../utils/storage"
import { CreateResponse } from "../../types/global.type"
import { showMessage } from "../../utils/showMessage"
import { AppThunk, RootState } from "../../types/redux.type"
import { saveData } from "../reducer/global"

const currentState = (state: RootState) => state.global;

export const postCreate = (
    data: any, 
    setLoading:(loading:boolean)=>void,
    handleClear: ()=> void,
) : AppThunk => async(dispatch, getState) =>{
    setLoading(true)
    try{
        const res = await axios.post(`https://reqres.in/api/users`, data,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(res.status === 201){
            console.log(data)
            const {datas} = currentState(getState())
            const resData : CreateResponse = res.data
            const newData = [...datas, resData]
            dispatch(saveData(newData))
            handleClear()
        }
    }catch(e : unknown | Error){
        if(e instanceof Error ){
            showMessage(e.message, 'danger')
        }
    }finally{
        setLoading(false)
    }
}

export const putData = (
    setLoading:(loading:boolean)=>void,
    data: any,
    id: string,
    handlerBack: ()=> void
) : AppThunk => async(dispatch, getState) =>{
    setLoading(true)
    try{
        const res = await axios.put(`${API_URL}users/${id}`,data,{
            headers:{
                'Content-Type':'application/json'
            },
        })
        if(res.status === 200){
            const {datas} = currentState(getState())
            const resData : CreateResponse = res.data
            const newData = datas.map(item => {
                if(item.id === id){
                    return {
                        ...item,
                        name: resData.name,
                        job: resData?.job,
                        updatedAt: resData?.updatedAt
                    }
                }else{
                    return item
                }
            })
            dispatch(saveData(newData))
            handlerBack()
        }
    }catch(e : unknown | Error){
        if(e instanceof Error ){
            showMessage(e.message, 'danger')
        }
    }finally{
        setLoading(false)
    }
}

export const deleteData = (
    setLoading:(loading:boolean)=>void,
    id: string
) : AppThunk => async(dispatch, getState) =>{
    setLoading(true)
    try{
        const res = await axios.delete(`${API_URL}users/${id}`,{
            headers:{
                'Content-Type':'application/json'
            },
        })
        if(res.status === 204){
            const {datas} = currentState(getState())
            const newData = datas.filter(item => item.id != id);
            dispatch(saveData(newData))
        }
    }catch(e : unknown | Error){
        if(e instanceof Error ){
            showMessage(e.message, 'danger')
        }
    }finally{
        setLoading(false)
    }
}