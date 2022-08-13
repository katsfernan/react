import { getImagen } from "../base-pruebas/09-async-await"

describe('Pruebas en 11-async=await', () => { 
    test('Debe retornar el URL de la imagen', async () => { 

        const url = await getImagen();

        console.log(url)

        expect(typeof url).toBe('string')
     })
 })