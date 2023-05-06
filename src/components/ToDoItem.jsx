import React, { useState } from "react";

function ToDoItem(props){

    const [complete, setCompleted] = useState(false);

    function handleClick(){
        setCompleted(prevValue => {return !prevValue});
    }

    return (
   // <div onClick = {handleClick}>
   <div onClick = {()=>{
        props.onChecked(props.id);
   }}>
        <li style={{textDecoration : complete ? "line-through" : "none"}} >{props.text}</li>
    </div>
    );
}

export default ToDoItem;