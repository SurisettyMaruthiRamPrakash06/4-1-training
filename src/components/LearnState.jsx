import { useState } from "react";

const LearnState = () => {
    const [count, setCount] = useState(0);
    //console.log(count);
    
    function inc(){
        setCount(count + 1);
        console.log(count);
    }
    function dec(){
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div>
            <button onClick={() => inc()}>
                Click me for Increment 
            </button><br /><br />
            <p>{count}</p><br />
            <button onClick={() => dec()}>
                Click me for Decrement 
            </button>
        </div>
    );
};

export default LearnState;

// ! Prop Drilling