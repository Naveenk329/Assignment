import React, { useState } from 'react'
import products from "../products.json";
import { Table } from "./Table";


export const FilterProduct = () => {
    const [title, setTitle] = useState("")
    const search = function (data) {
        return data.filter(ele => ele.title.includes(title))
    }

    return (
        <div>
            <input type="text" placeholder="Search title" onKeyDown={(str) => setTitle(str.target.value)} />
            <Table data={search(products)}/>
           

        </div>
    )
}

export const OnClickEvent = () =>{

    function title(){
        let prod = products.map(ele=> (ele.title))
        console.log (prod)

    }

    return (
        <div>
            <h1>Click</h1>
            <button onClick={title}>Click here</button>

        </div>
    )
}