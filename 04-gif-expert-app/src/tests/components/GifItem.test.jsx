import { render , screen} from '@testing-library/react'

import { GifItem } from "../../components/GifItem";

describe('Prueba <GifItem/>', () => { 

    const title = 'Soy un titulo de un Gif'

    const url = 'https://giphy.com/gifs/callofduty-call-of-duty-modern-warfare-2-ii-eFxpuiAuG4nrPNCPEM'

    test('Debe mostrar el mismo snapshot', () => { 

        render
        const { container } = render(
            <GifItem
            title = { title }
            url = { url }
            />
        )
        expect( container ).toMatchSnapshot();
     })
 })