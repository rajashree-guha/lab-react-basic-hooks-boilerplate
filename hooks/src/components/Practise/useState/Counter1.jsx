import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

const Counter1 = () => {

  let [currAge,setCurrAge]=useState(20) 

  const {isDark}=useContext(AppContext) 
  console.log(isDark);
  const decreaseAge=()=>{
    setCurrAge(currAge-1);
  }

  const Increase10Years=()=>{
    setCurrAge(currAge+10);
    // for(let i=0;i<10;i++){
    //     setCurrAge((prev)=>prev+1)
    // }
  }

  return (
    <div style={{border:"2px solid black",
                padding:"10px",
                backgroundColor:`${isDark?"black":"white"}`,
                color:`${isDark?"white":"black"}`
    }}>
        <div><h1>C-O-U-N-T-E-R-1</h1></div>
        <h4>Age: {currAge}</h4>
        <button onClick={()=>{
            setCurrAge(currAge+1);
        }}>Get Older</button>


        <button onClick={decreaseAge}>Get Younger</button>

        <button onClick={Increase10Years}>Get older by 10 years</button>
    </div>
  )
}

export default Counter1


//App.jsx

// import Counter1 from './components/useState/Counter1'
// import Counter2 from './components/useState/Counter2'
// import Counter3 from './components/useState/Counter3'
// import Counter4 from './components/useState/Counter4'
// import Effect from './components/useEffect/Effect'
// import ParentContext, { AppContext } from './components/useContext/ParentContext'

// function App() {

//   const [show,setShow]=useState(true)
//   const {isDark,setIsDark}=useContext(AppContext)
//   return (
//     <>
//     <button onClick={()=>{
//       setShow(!show)
//     }}>Change</button>

    {/* {!show ? (<>
      <Counter1/>
      <Counter2/>
      <Counter3/>
      <Counter4/>
    </>):(
      <Effect/>
    )
    } */}

  //  <button onClick={()=>{
  //   setIsDark(!isDark)
  //   // console.log(isDark)
  //  }}>{isDark?"Dark Theme":"Light Theme"}
  //  </button>


  //   {show==true ? <>
  //     <Effect/>
  //     <ParentContext/>
  //     </>:<>
  //     <ParentContext>
  //       <Counter1/>
  //     </ParentContext>

  //     <Counter2/>
  //     <Counter3/>
  //     <Counter4/>
  //   </>}

  //   </>
//   )
// }