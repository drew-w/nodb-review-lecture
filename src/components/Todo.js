import React from 'react';

const Todo = props => {
    return <div className="todo">
        <div className={props.todo.complete ? 'todo-task complete' : 'todo-task'}>{props.todo.task}</div>
        <div className="btn-container">
            <button onClick={() => props.completeTodo(props.todo.id)}>{!props.todo.complete ? '✔' : '↩'}</button>
            <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
        </div>
    </div>
}

export default Todo