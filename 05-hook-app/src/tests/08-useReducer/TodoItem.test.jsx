import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => { 

    const todo = {
        id:1,
        description:'Piedra del Alma',
        done:false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( ()=> jest.clearAllMocks);

    test('Debe de mostrar el Todo pendiente de completar', () => {
        
        render(
            <TodoItem
                todo= {todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo ={onDeleteTodoMock}
            />);
        
        const liElement = screen.getByRole('listitem');

        // screen.debug();
        expect( liElement.className).toBe('list-group-item d-flex justify-content-between')


    });
    test('Debe de mostrar el todo completado', () => {
        
        todo.done = true 

        render(
            <TodoItem
                todo= {todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo ={onDeleteTodoMock}
            />);
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('text-decoration-line-through')

    });

    test('Debe de llamar el ToggleTodo cuando se hace click', () => {

        render(
            <TodoItem
                todo= {todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo ={onDeleteTodoMock}
            />);
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith( todo.id );

    });

    test('Button debe de llamar el  DeleteTodo cuando se clickea', () => {

        render(
            <TodoItem
                todo= {todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo ={onDeleteTodoMock}
            />);
        
        // screen.debug();
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id );

    });
 })