import React, { useContext, useEffect } from "react";
import { useState } from 'react'
import { AppContext } from "../useContext/ParentContext";

const Counter4=()=>{

    const [age,setAge] = useState(49);
    const [sib, setSib] = useState(49);
    const {setMainCount}=useContext(AppContext)
    useEffect(()=>{
       return()=>{
        console.log("counter 4 unmounds")
       }
        
      },[])

    return(
        <div style={{border:"2px solid black",
        padding:"10px",
        margin:"30px 0"
            }}>
            <h1>C-O-U-N-T-E-R-4</h1>
            <h3>My Current Age is:{age}</h3>
            <h3>Sibling:{sib}</h3>
            <button onClick={()=>{
                setAge((prev)=>prev+1);
            }}>Get Older</button>
            <button onClick={()=>{
               setSib((prev)=>prev+1);
            }}>Get More Sib</button>
            <button onClick={()=>{
                setAge(0)
                setSib(0)
            }}>Reset</button>

            <button onClick={setMainCount}>+ main count</button>
        </div>
    )
}

export default Counter4;