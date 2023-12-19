import React, { useContext } from "react";
import { useState } from 'react'
import { AppContext } from "../useContext/ParentContext";

const Counter3=()=>{
    const [data,setData]=useState({age:20,sibling:3})

    const {decreaseCount}=useContext(AppContext)

    function handleAge(){
      setData({...data,age:data.age+1})
    }

    const handleSibling=()=>{
       setData({...data,sibling:data.sibling+1})
    }

    return(
        <div style={{border:"2px solid black",
        padding:"10px",
        margin:"30px 0"
            }}>
            <h1>C-O-U-N-T-E-R-3</h1>
            <h3>My Current Age is: {data.age}</h3>
            <h3>Sibling: {data.sibling}</h3>
            <button onClick={handleAge}>Get Older</button>
            <button onClick={handleSibling}>Get More Sib</button>

            <button onClick={decreaseCount}>- Main Count</button>
        </div>
    )
}

export default Counter3;