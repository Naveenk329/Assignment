import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";
const Parent=() =>{
  return (
     <div>
        <Child/>
     </div>
  );
}
const Child=()=>{
    let [counter,setCounter] = useContext(UserContext);

    return(
        <div>
           <button onClick={()=>{
            if(counter<=9){
                setCounter(counter+1)
            }
           }}>increment</button>
          <Grandchild />
        </div>
    )
}

const Grandchild=()=>{
    let [counter,] = useContext(UserContext);
    return(
        <div>
            <h2>Comp3</h2>
            <h2>{`Hello ${counter} again!`}</h2>
        </div>
    )
}
export default Parent;