import { useState } from "react";


export default function MillionApp(){
    const [count, setCount] = useState(0);
    const increment = ()=> setCount(count+1);

    return (
        <div>
            <p> Count: {count}</p>
            <button onClick ={increment}> increment</button>
        </div>

    ) 

    

}