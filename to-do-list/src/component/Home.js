import { useState } from "react";

function Home(){
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = (e) => {
        if(todo === ""){
            return;
        }
        e.preventDefault();
        setTodos((current) => [...current, todo]);
        setTodo("")
    }
    const btnOnClick = (e) => {
        document.getElementById(e.target.className).remove();
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="add your todo"
                    onChange={onChange}
                    value={todo}
                />
                <button>submit</button>
            </form>
            <hr/>
            <ul>
                <form>
                    {todos.map((item, index) => 
                        <li key={index} id={index}>
                            {item}
                            <button className={index} onClick={btnOnClick}>삭제</button>
                        </li>)}
                </form>
            </ul>
        </div>
    );
}
export default Home;