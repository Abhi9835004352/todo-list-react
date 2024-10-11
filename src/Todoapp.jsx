import { useState } from "react";
import Delete from './images/delete.svg';

let nextId = 0;
export default function Todoapp() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const listItem = todos.map(todo => <li className="flex place-content-center border-2 border-black m-1 p-1 rounded-lg justify-between" key={todo.id}><span>{todo.text}</span><button className="cursor-pointer" onClick={()=>{setTodos( todos.filter(t => t.id !== todo.id))}}><img src={Delete}></img></button></li>);
    return (
        <>
            <div className="h-[500px] bg-blue-50 mx-[500px] mt-[100px] rounded-lg p-1 shadow-lg">
                <form className="m-1 justify-center flex gap-10 ">
                    <input value={input} type="text" placeholder="Enter your task " className="border-2 h-10 rounded-lg p-1 px-4" onChange={e => setInput(e.target.value)
                    } />
                    <button className="border-2 rounded-lg p-1 bg-blue-300 h-10" onClick={
                        (e) => {
                            e.preventDefault();
                            setTodos([
                                ...todos, { id: nextId++, text: input }
                            ]);
                        }
                    }>Add</button>
                </form>
                <div className="text-center text-3xl mt-3 ">Todo</div>
                <div className="w-[100%] h-[1px] bg-black mx-[-2px]"></div>
                <ul className="flex-col">{listItem}</ul>
            </div>
        </>
    );
}


