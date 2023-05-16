import { useState } from "react";

export default function MyButtonEvent(){
    const [count,setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count+1);
    }


    return(
        <div><button onClick={handleClick}>{count} 클릭했씀다!!</button></div>
    );
}