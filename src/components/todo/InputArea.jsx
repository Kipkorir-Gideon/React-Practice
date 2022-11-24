import { useState } from "react"

function InputArea(props) {
    const [todo, setToDo] = useState("");

    function handleChange(event) {
        const newTodo = event.target.value;
        setToDo(newTodo);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" placeholder="Write your ToDo" value={todo} />
            <button onClick={() => {
                props.onAdd(todo);
                setToDo("")
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}


export default InputArea;