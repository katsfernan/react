import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../hooks";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Fernando',
        email: 'fmartinesr195@gmail.com'
    }



    test('Debe de regresar la informacion por defecto', () => {
        
        const { result } = renderHook( ()=> useForm(initialForm));
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email:initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm:  expect.any(Function)
        });

    });

    test('Debe de cambiar el nombre del formulario', () => {
        
        const newValue = {
            name:'name',
            value: 'jose'
        }

        const { result } = renderHook( ()=> useForm(initialForm));
        const { onInputChange } = result.current;

        act( () => (
            onInputChange({target: newValue})
        ))

        expect(result.current.name).toBe('jose');

    });

    test('Debe de reiniciar el formulario', () => {
        
        const newValue = {
            name:'name',
            value: 'jose'
        }

        const { result } = renderHook( ()=> useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({target: newValue});
            onResetForm()
        });

        expect(result.current.name).toBe(initialForm.name);

    });
});