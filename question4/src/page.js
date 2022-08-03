import {useContext} from 'react'
import Profile from './Profile';
import { usercontext} from './App.js';

export default function Page(){
    const [username] = useContext(usercontext);
    return(
    <>
    <h1>Page:</h1>
    <h4>Username:  {username}</h4>
    
    <Profile/>
    </>
    )
}