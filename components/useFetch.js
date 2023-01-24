import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'

export default  (url="",options=null) => {
    const [data,setData]= useState(null)
    const[error,setError]=useState(null)
    const [loading,setLoading]=useState(false)

 useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        fetch(url,options)
        .then((res)=>res.json())
        .then((data)=>{
           console.log()
            setData(data)
            setError(null)
        })
        .catch(err=>{
            setError(err)
            setData(null)
        })
        .finally(()=>setLoading(false))
    },5000)
 },[url,options])   
 return {loading,error,data}
 
}

