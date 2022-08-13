import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock('../../hooks/useTodo');

describe('Prueba en <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id:1, description:'todo number 1', done:true},
            {id:2, description:'todo number 2', done:false}
            
        ], 
        todosCount: 2 ,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('Debe de mostrar el componente correctamente', () => {
        
        render( <TodoApp/>)

        expect(screen.getByText('todo number 1')).toBeTruthy();
        expect(screen.getByText('todo number 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
 })