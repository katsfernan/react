import React from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()

    return (
    <>
        <h1>TodoApp: 10 <small>(2 pendientes)</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    todos = {todos} 
                    onDeleteTodo = { handleDeleteTodo }
                    onToggleTodo = { handleToggleTodo }
                />
            </div>

            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />
                <TodoForm onNewTodo={ handleNewTodo }/>
            </div>
        </div>

    </>
    )
}
