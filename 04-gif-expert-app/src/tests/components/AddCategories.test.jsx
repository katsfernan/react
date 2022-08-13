import  { screen, render, fireEvent } from "@testing-library/react";
import { AddCategories } from "../../components";

render
describe('Pruebas en <AddCategory/>', () => {

    const search = 'One punch man'
    const onNewCategory = jest.fn();

    test('Debe de cambiar el valor de la caja de texto,', () => {

        AddCategories
        render( <AddCategories onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        // screen.debug();
        
        fireEvent.input( input, { target: { value: search}} )
        expect( input.value ).toBe(search);
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        

        render( <AddCategories onNewCategory={ onNewCategory}/>);

        

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: search}} );
        fireEvent.submit( form );
        
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory).toHaveBeenCalledTimes(1);
        expect( onNewCategory).toHaveBeenCalledWith(search);


     });

     test('No debe de llamar el onNewCategory si el input es vacio', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategories onNewCategory={ onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit( form );
        
        expect( onNewCategory).toHaveBeenCalledTimes(0);
        expect( onNewCategory).not.toHaveBeenCalled();

    });

    
});
