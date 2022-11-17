import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add_todo, delete_todo } from './Redux/todoSlice';

function TodoList() {
    const list = useSelector(state => state.list.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState();
    const DeleteTodo = (e) => {
        console.log(e.target.value)
        const newList = list.filter((elem) => elem.id != e.target.value)
        console.log(newList)
        dispatch(delete_todo({
            list: newList
        }))
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="add-items">
                        <input type="text" placeholder='Type the task'
                            onChange={(e) => setInput(e.target.value)} />
                        <button onClick={() => dispatch(add_todo({
                            list: [...list, { id: Math.random(), data: input }]
                        }))} >Submit</button>
                        {list.map(task => {
                            return (

                                <div key={task.id}>{task.data} <button value={task.id} onClick={DeleteTodo}>Delete</button></div>


                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList