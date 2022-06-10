const Form = ({
    handleSubmit,
    taskInput,
    setTaskInput,
}) => {
    return (
    <form onSubmit={handleSubmit}>
        <label>
            Enter your task:
            <input 
                type = "text"
                value= {taskInput}
                onChange = {(e) => setTaskInput (e.target.value)}>
            </input>
        </label>
        <input type = "submit"></input>
    </form>
    );
}

export default Form;