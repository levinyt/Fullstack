import axios from 'axios'
import { useState } from 'react';
const View = () => {

    const [result,setResult]=useState([])
    const handleClick=async() => {
        const res=await axios.get('http://localhost:5000')
        setResult(res.data)


        
    }
    return ( 
        <div>
            <h1>To view Task</h1>
            <button onClick={handleClick}>click me </button>
            {result.map(item=><li>{item.name}:{item.desc}</li>)}
                       
        </div>
     );
}
 
export default View;