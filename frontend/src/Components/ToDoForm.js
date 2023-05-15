import { useState } from "react";
import './component_styles/todoform.css'

const NewToDo = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState(null);


    const Submitfunc = async (e) => {
        e.preventDefault();

        const todo = {task, priority, status}

        const response = await fetch('/api/todo', {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTask('')
            setPriority('')
            setStatus('')
            setError(null)
            console.log(json)
        }
        window.location.reload();
    }

    return (
        <div className="todoform">
        <form className="newtodo" onSubmit={Submitfunc}>
            <h2>Create New ToDo</h2>

            <label>Task to do: </label>
            <input type="text" onChange={(e) => setTask(e.target.value)} required value={task}/>

            <label>Priority of task: </label>
            <input type="number" min="1" max="10" onChange={(e) => setPriority(e.target.value) } required value={priority} />

            <button type="submit" onClick={(e) => setStatus("Incomplete") }>Add ToDo</button>
            {error && <div className="error">{error}</div>}
        </form>
        </div>
    )
}

export default NewToDo