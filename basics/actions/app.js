import axios from 'axios';
import { FETCH_ALL_DATA } from '../constants/app';




const dataFetch =data =>({
    type:FETCH_ALL_DATA,
    data:data,
});

export const fetchDataAll =() => dispatch =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        dispatch(dataFetch(res.data))
    })
}