import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext()

const AppProvider = ({children}) =>{
    const [pages, setPages] = useState(0)
    const [pageItems, setPageItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async(index) => {

        setLoading(true)

        const response = await axios.get(`https://reqres.in/api/users?page=${index ? index : 1}`)

        const {total_pages, data} = response.data

        setPages(total_pages)
        setPageItems(data)
        setLoading(false)
    }

    return (
        <appContext.Provider value={{pages, pageItems, fetchData, loading}}>

            {children}
            
        </appContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(appContext)
}

export {useGlobalContext, AppProvider}