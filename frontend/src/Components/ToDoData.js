import './component_styles/tododata.css'

const ToDoData = ({todo}) => {
    const task = todo.task
    const priority = todo.priority
    const update = {task, priority, status:"Completed"}
    const deletetodo = async () => {
        await fetch(`/api/todo/${todo._id}`, {
            method: 'DELETE'
        })
        window.location.reload();
    }
    const completedtodo = async () => {
        await fetch(`/api/todo/${todo._id}`, {
            method: 'PATCH',
            body: JSON.stringify(update),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.reload();
    }

    return (
        <div className="single_todo">
            <h3 className="task">{todo.task}</h3>
            <h3 className='priority'>priority: {todo.priority}</h3>
            <h3 className='status'>Status: {todo.status}</h3>       
            <button onClick={completedtodo}>Completed</button> 
            <button onClick={deletetodo}>Delete</button> 
        </div>
    )
}

export default ToDoData