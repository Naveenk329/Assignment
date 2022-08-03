import {useContext} from 'react'
import { usercontext} from './App.js';


export default function SideNav(){
    const [activeprofiles] = useContext(usercontext);
    return(
    <>
    <h1>SideNav:</h1>
    <h4>Activeprofiles:   {activeprofiles}</h4>
    </>
    )
}

