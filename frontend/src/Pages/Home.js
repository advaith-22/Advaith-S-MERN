import { useEffect, useState } from "react"
import ToDoData from "../Components/ToDoData";
import NewToDo from "../Components/ToDoForm";


const Home = () => {

    const [ todo, setToDo ] = useState(null);

    useEffect(() => {
        const fetchToDo = async () => {
            const res = await fetch("/api/todo");
            const json = await res.json();

            if(res.ok){
                setToDo(json);
            }
        }

        fetchToDo();

    }, [])

    return <div>
        <div><NewToDo /></div>
        <div>
            {todo && todo.map((todo) => (
                <ToDoData key={todo._id} todo={ todo } />
            ))}
        </div>
        
    </div>
}

export default Home