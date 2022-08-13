import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleHooks } from "../../../03-examples/MultipleHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();
        
    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    });

    beforeEach(()=> {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            errors: null
        });

        render(<MultipleHooks/>);
        
        expect(screen.getByText('Loading...'));

        const nextButton = screen.getByRole('button')

        expect(nextButton.disabled).toBeTruthy;
        // screen.debug();

     });

     test('Debe de mostrar un quote', () => { 

        useFetch.mockReturnValue({
            data:  [{author:'fernando', quote: 'hola mundo'}],
            isLoading: false,
            errors: null
        });
 
        render(<MultipleHooks/>);
        expect(screen.getByText('hola mundo')).toBeTruthy();

        const nextButton = screen.getByRole('button');
        expect(nextButton.disabled).toBeFalsy();
        // screen.debug();

      });

      test('Debe de llamar la funcion de incrementar', () => { 

        useFetch.mockReturnValue({
            data:  [{author:'fernando', quote: 'hola mundo'}],
            isLoading: false,
            errors: null
        });
        
        render(<MultipleHooks/>);

        const nextButton = screen.getByRole('button');
        fireEvent.click( nextButton);

        expect(mockIncrement).toHaveBeenCalled();

       });
 })