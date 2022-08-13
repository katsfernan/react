import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp/>', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
    
        const { container } = render(
        <FirstApp 
            title='Hola, soy Fernando'
            subTitle = 'Soy un subtitulo'
        /> 
         )

        expect(container).toMatchSnapshot();

     });
    
    test('debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, que tal todo ?'
        const { container, getByText } = render(
        <FirstApp 
            title={title}
            subTitle = 'Soy un subtitulo'
        /> 
         )

         expect( getByText(title) ).toBeTruthy();

         const h1 = container.querySelector('h1')

         expect(h1.innerHTML).toBe(title)
     })
 })