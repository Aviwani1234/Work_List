import React, {useState} from "react";

function InputArea(props) {
    const [item, setItem] = useState("");

    function addItem(event) {
        setItem(event.target.value);
      }

    return (
        <div className="form">
            <input onChange={addItem} type="text" value={item} />
            <button onClick={()=>{
                props.onAdd(item);
                setItem('');
            }}>
                <span>Add</span>
            </button>
        </div>

    );
}

export default InputArea;