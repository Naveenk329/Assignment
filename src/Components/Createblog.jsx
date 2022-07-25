import React, { useState, useEffect } from 'react'
//import { useHistory } from 'react-router-dom';
//import { NavLink,useNavigate} from 'react-router-dom';
//import axios from 'axios'

export const Createblog = () => {
    //const history = useNavigate();
    const [text, setText] = useState({
        title: "",
        imageUrl: "",
        description: ""

    })

    const [err, setErr] = useState({
        title: "",
        imageUrl: "",
        description: ""
    })

    const isValid = function(value){
        if(typeof value == 'undefined' || value==null) return false
        if(typeof value =='string' && value.trim.length ==0) return false
        return true
    }
    const onText = (ele) => {
        //console.log("submitted")
        const { value, name } = ele.target
        setText({ ...text, [name]: value })

    }
    console.log(text)
    const onSubmit = async function (){

        const {title,imageUrl,description}= text
        const res = await fetch('/create',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,imageUrl,description})
        });
        const res1 = await res.json()
        if(res1.status == 400){
            window.alert("Invalid request")
            console.log("Invalid request")
        }
        else{
            window.alert("Successfully created")
            console.log("Successfully created")
        }
       // history("/create");


    } 
   
        
        
    


    return (
        <div className="card" style={{ width: "24rem", marginLeft: "35%", padding: "50px" }}>
            <div className="card-header">
                <p>Blog</p>
            </div>
            <div className="card-body from">
                <input type="text" name='title' id="form12" class="form-control"value={text.title} onChange={onText} />
                <label class="form-label" for="form12">Title</label>
                <p style={{ color: "red" }}>{err.title}</p>
                <input type="text" name='imageUrl' id="form12" class="form-control" value={text.imageUrl} onChange={onText} />
                <label class="form-label" for="form12">ImageUrl</label>
                <p style={{ color: "red" }}>{err.imageUrl}</p>
                <textarea class="form-control" name='description' id="textAreaExample1" rows="4" value={text.description} onChange={onText}></textarea>
                <label class="form-label" for="textAreaExample">Description</label>
                <p style={{ color: "red" }}>{err.description}</p>
            </div>
            <div className="card-footer">
                <button className='btn btn-primary' onClick={onSubmit}>Create Blog</button>
            </div>
        </div>
    )
}
