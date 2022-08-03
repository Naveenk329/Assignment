import {useContext} from 'react'
import { usercontext} from './App.js';
import TopNav from './TopNav';
import Page from './page';
export default function Main(){
    const [title,username] = useContext(usercontext);
    return(
    <>
    <h1>Main:</h1>
    <h4>Title:   {title} </h4>
    <h4>Username:   {username} </h4>
    
    <TopNav/>
    <Page/>
    </>
    )
}