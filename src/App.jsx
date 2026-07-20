import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Fragment } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Conditional from "./components/Conditional";
import LearnState from "./components/LearnState";
import context from "./components/context";

function App() {
  // let sname = "saomya";
  // let age = 50000;
  // let a="ram";
  // function abc(){
  //   console.log("Heloooooooo");
  // }

  // let login=false;

  // function handleClick(){
  //   console.log("button clicked");
  // }

  return (
    <Fragment>
      {/* <h1>Name: {sname}</h1>
      <p>Age: {age}</p>
      <h2>{ abc()}</h2> */}
      {/* <h3>{18>10?'18 is greater':'10 is greater'}</h3>
      <button onClick={handleClick}>Click Me</button> */}
      {/* <Button /> */}
      {/* <Navbar sname={'vishal'} age={30} skills={['js','react']}/> */}
      {/* <Conditional/> */}
      {/* <div>{login?<Navbar/>:<Conditional/>}</div> */}
      {/* <LearnState /> */}

      <context.Provider value={"Shubham"}>
        <Navbar />
      </context.Provider>
    </Fragment>
  );
}

export default App;