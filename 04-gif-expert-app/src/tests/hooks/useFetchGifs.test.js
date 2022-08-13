import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    const category = 'One punch man'

    test('Debe de regresar el estado inicial ', () => {
        
        const { result } = renderHook( () =>  useFetchGifs(category));
        const { images, isLoading } = result.current;
       
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de regresar un arreglo de imagenesy el isLoading en false ', async() => {
        
        const { result } = renderHook( () =>  useFetchGifs(category));
        
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        )
  
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
    
});