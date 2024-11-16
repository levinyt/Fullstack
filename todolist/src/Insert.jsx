import { useState } from "react";
import axios from 'axios'

const Insert = () => {
    const [name,setName]=useState('')
    const [desc,setDesc]=useState('')
    const handleClick= async()=>{

        const res= await axios.post('http://localhost:5000/',{name,desc})

    }

    return ( 
        <div>
            <h1>Insert into to-do list</h1>
            <input type="text" placeholder="Enter your task here" onChange={(e)=>setName(e.target.value)} /><br />
            <input type="text" placeholder="Description"  onChange={(e)=>setDesc(e.target.value)}/><br/>
            <button onClick={handleClick}> Click to send</button>
        </div>
    );
}
 
export default Insert;