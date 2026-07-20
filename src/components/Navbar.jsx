import React, { useState } from 'react'

const Navbar = (props) => {
  // console.log(props);
  // let [count,setCount]=useState(0)
  // console.log(count);
  
  // let updateState=()=>{
  //   setCount(++count)
  // }
  
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        backgroundColor: "navyblue",
        boxShadow: "0px 0px 5px 5px gray",
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 40px",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div>logo</div>

      <div style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>service</li>
      </div>
    </div>
    // <>
    //   {/* <p>{props.sname}</p>
    //   <p>{props.age}</p>
    //   <p>{props.skills}</p> */}

    //   {/* <button onClick={updateState}>update</button> */}
    // </>
  )
}

export default Navbar