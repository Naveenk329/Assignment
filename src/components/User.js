import React from 'react'
import dataUser from '../users.json'

export const User = () => {


    const data = dataUser.map(ele => ele.username)
    function typeOfSort(){
        return 'Asc'
    }
    const sorted = data.sort((a,b)=>{
        const sort1 = (typeOfSort === 'Asc')?1:-1;
        return sort1* a.localeCompare(b)
    })
    
   


    

    //console.log(data)

    return (
        <div>
         
            {data.map((ele) => (
                <li>{ele}</li>
            ))}

        </div>
    )
}
