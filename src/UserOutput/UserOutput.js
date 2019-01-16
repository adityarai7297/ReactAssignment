import React from 'react';
import './UserOutput.css';

const userOutput = (props)=>{
    
    return <div className ='UserOutput'>
        
           <p>{props.userNo} is {props.username}</p>
           
        
           </div>
    
}


 export default userOutput;