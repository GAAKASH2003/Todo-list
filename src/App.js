import React, { useState } from "react";
import List from "./list";

const App=()=>{
  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
  const item =(event) =>{
    setInputList(event.target.value);
  };

const deleteItems=(id)=>{
    console.log("deleted");
    setItems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
      return index!==id;
      })
    })
};  
  const listItems=()=>{
    setItems((olditems)=>{
      return  [...olditems,inputList];
    });
    setInputList(""); 
    
  }
return(
  <>
  <div className="main_div">
  <div className="center_div">
  <br />
  <h1>Todo List</h1>
  <br />

  <input type="text" placeholder="Add a item" onChange={item} value={inputList} />
  <button onClick={listItems}>+</button>
  <div className="listop">
  <ul>{

  Items.map((itemval,index)=>{

  if(itemval!==""){
  return  <List text={itemval} key={index} id={index} onSelect={deleteItems} />;}}
  )}

  </ul>
  </div>

  </div>
  </div>
  </>
);
};
export default App;