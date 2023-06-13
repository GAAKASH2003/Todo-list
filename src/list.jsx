import React from "react"
import "./App.js"
const List=(props)=>{
    
    return( 
        
        <>
        <div className="lis">
        <li>{props.text}</li>
        <button onClick={()=>{
            props.onSelect(props.id)
        }}>x</button>
        </div>
        </>);
      
};
export default List;

