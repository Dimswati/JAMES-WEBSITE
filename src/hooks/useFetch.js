import React, {useEffect, useState} from "react"
import { api } from "../api/makeRequest"

const useFetch = (url) => {
    const [rawData, setRawData] = useState(null) 
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(()=>{
        const fetchData = async() => {
            try {
                setIsLoading(true)
                const res = await api.get(url)
                setRawData(res.data)
            }catch(error){
                setError(error)
            }finally{
                setIsLoading(false)
            }
        }

        fetchData();
    }, [url])

    return {rawData, isLoading, error}
}

export default useFetch;