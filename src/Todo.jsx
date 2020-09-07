import React, { useState } from 'react';
import './Todo.css';
import Item from './Item';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
    const [task, setTask] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const inputTask = (event) => {
        setTask(event.target.value);
    }
    
    const addTask = (event) => {
        event.preventDefault();
        setTodoItems( (preTask) => {
            return [...preTask, task];
        });
        setTask("");
    }

    const deleteItem = (id) => {
        setTodoItems( (existingItems) => {
            return existingItems.filter( (item, index) => {
                return index !== id;
            });
        });
    }

    const clearList = () => {
        setTodoItems([]);
    }

    return (
        <>
            <h1>ToDo List <i className="fa fa-bomb" title="Clear List" onClick={clearList} aria-hidden="true"></i></h1>

            <form onSubmit={addTask} className="taskfield">
                <input type="text" onChange={inputTask} value={task} name="itemField" placeholder="Add a Task" required />
                <button type="submit"><i className="fa fa-plus" aria-hidden="true"></i></button>
            </form>

            <ol>
            {   
                todoItems.map( (currentTask, id) => {
                    return <Item key={id} 
                        id={id} 
                        text={currentTask} 
                        onSelect = {deleteItem}
                    />
                })
            }
            </ol>
        </>
    );
}

export default Todo;