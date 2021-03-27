import React from 'react';
import "./style.scss"
import classnames from 'classnames'

function TodoList({todoList, onTodoClick}) {
    const handleTodoClick = (todo, index) => {
        if(!onTodoClick) return
        onTodoClick(todo, index)
    }
    return (
        <ul className="todo-list">
           {todoList.map((todo, index) => (
               <li 
                    key={todo.id}
                    className={classnames({completed: todo.status === 'completed'})}
                    onClick={()=>handleTodoClick(todo, index)}
               >
                   {todo.title}{index}
               </li>
           ))} 
        </ul>
    );
}

export default TodoList;