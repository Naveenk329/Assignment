import {useContext} from 'react'
import { usercontext} from './App.js';

export default function TopNav(){
    const [title] = useContext(usercontext);
    return(
    <>
    <h1>TopNav:</h1>
    <h4>Title: {title}</h4>
    
    
    </>
    )
}