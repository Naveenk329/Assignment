import {useContext} from 'react'
import { usercontext} from './App.js';

export default function Profile(){
    const [username] = useContext(usercontext);
    return(
    <>
    <h1>Profile:</h1>
    <h4>Username:  {username}</h4>
    
    
    </>
    )
}