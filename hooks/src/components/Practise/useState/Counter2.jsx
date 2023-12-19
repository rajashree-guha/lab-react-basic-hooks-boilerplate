import React, { useContext, useEffect } from "react";
import { useState } from 'react'
import { AppContext } from "../useContext/ParentContext";


function Counter2(){
    const [currAge,setAge] = useState(19);
    const [currSib, setSib] = useState(1);
    const {mainCount}=useContext(AppContext)

    useEffect(()=>{
      console.log(" counter 2 mount")
      
    },[])
    const age = ()=>{
      setAge(currAge+1);
    }
  
    const increaseSib = ()=>{
      setSib(currSib+1);
    }
    const decreaseSib = ()=>{
      setSib(currSib-1);
    }
  
  
    return (
        <div style={{border:"2px solid black",
        padding:"10px",
        margin:"30px 0"
        }}>
        <h1>C-O-U-N-T-E-R-2</h1>
        <h3>My Current Age is {currAge}</h3>
        <h4>My siblings {currSib}</h4>
        <h4>Main Count : {mainCount}</h4>
        <button onClick={age}>Get Older</button>
        <button onClick={increaseSib}>Get more Sib</button>
        <button onClick={decreaseSib}>Decrease Sib</button>
      </div>
    );
  }
  
  export default Counter2;