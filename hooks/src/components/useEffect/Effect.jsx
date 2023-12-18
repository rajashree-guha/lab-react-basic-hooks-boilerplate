import React, { useEffect } from "react";
import { useState } from 'react'

const Effect=()=>{
     const [count,setCount]=useState(0)
     const [age,setAge]=useState(30)

     useEffect(()=>{
       console.log("component re-renders")
       console.log("count:", count)
       console.log("age:", age)

       return()=>{
        console.log("unmount")
       }
     },[])

    return(
        <div style={{border:"2px solid black",
        padding:"10px",
        margin:"30px 0"
            }}>
            <h1>E-F-F-E-C-T</h1>
            <h3>Count: {count}</h3>
            <h3>Age: {age}</h3>

            <button onClick={()=>{
                setCount(count+1)
            }}>+</button>

            <button onClick={()=>{
                setAge(age-1)
            }}>-age</button>
            </div>
    )
}

export default Effect;

