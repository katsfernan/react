import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 
    
    const category ='One punch man';



    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render( <GifGrid category = { category }/>);
        expect(screen.getByText('Cargando...'));

     });

     test('Debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => { 

        const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://gifs.com/saitama.jpg'
        },
        {
            id: 'EDF',
            title: 'Call of duty',
            url: 'https://gifs.com/callofduty.jpg'
        }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category = { category }/>);

        expect( screen.getAllByRole('img').length ).toBe(2)

      });
 })