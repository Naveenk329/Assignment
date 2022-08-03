import {useContext} from 'react'
import SideNav from './SideNav'
import { usercontext} from './App.js';
import Main from './Main';
export default function Dashboard(){
    const [title,username,activeprofiles] = useContext(usercontext);
    return(
    <>
    <h1>Dashboard:</h1>
    <h4>Title:   {title}<br/>Username:   {username}<br/>Activeprofiles:   {activeprofiles}</h4>
    <SideNav/>
    <Main/>
    </>
    )
}