import './App.css';
import Form from './components/Form';
import Person from './components/Input';
import { useState } from "react";

const App = () => {
    const [inputs, setInput] = useState([
        { task: "Update List!"},
    ]);

    const [taskInput, setTaskInput] = useState("")

    const handleClick = (index) => {
        let storedTasks = [...inputs];
        storedTasks.splice(index, 1);
        setInput(storedTasks);
        console.log("Button was clicked");
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput([...inputs, {task:taskInput}])
        setTaskInput("")
    }
    
    return ( 
    <div className = "App">
        <h1>To-Do List</h1>
        {inputs.map((task, index) => {
            return (
                <Person
                    task = {task.task}
                    key = {index}
                    handleClick = {() => handleClick(index)}
                />
            )
        })}
        <Form
        handleSubmit = {handleSubmit}
        taskInput = {taskInput}
        setTaskInput = {setTaskInput}
        />
    </div> );
}

export default App;