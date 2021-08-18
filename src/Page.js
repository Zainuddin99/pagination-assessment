import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useGlobalContext } from './context'
import Item from './Item'

function Page() {
    const {pageItems, loading} = useGlobalContext()

    if(loading) return <div className="loader-container"><CircularProgress className="loader" disableShrink /></div> 

    return (
        <div className="page">

            {
                pageItems.map((item)=>{

                    return <Item key={item.id} data={item}/>
                    
                })
            }

        </div>
    )
}

export default Page
