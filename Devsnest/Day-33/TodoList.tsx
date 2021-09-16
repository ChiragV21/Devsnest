import React from 'react'

interface TodoListProps {
    title: string,
    done: boolean
}
const TodoList = ({ title, done}:TodoListProps) => {
    return (
        <div className="todo-list">
            <h2>{title}</h2>
        </div>
    )
}

export default TodoList
