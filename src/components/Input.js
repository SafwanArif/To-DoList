import { useState } from "react";

const Input = ({ task, handleClick }) => {
    const [done, setDone] = useState(false)

    return (
    <div>
        {done? (
        <h4 style={{textDecorationLine: "line-through"}}>{task}</h4>
        ) : (
        <h4>{task}</h4>
        )}
        
        <button onClick={handleClick}>Remove</button>
        <button onClick={() => {
            setDone(true)
        }}
        >
            Task done
        </button>
    </div>
    );
};

export default Input;