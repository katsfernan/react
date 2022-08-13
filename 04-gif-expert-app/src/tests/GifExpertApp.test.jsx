import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 

    test('Prueba 1', () => { 

        render( <GifExpertApp/>);
        screen.debug()
     })
 })