import { getHeroById } from "../base-pruebas/08_metodos_arrays";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroById debe de retornar un héroe por ID', () => { 
        const id = 1;
        const hero = getHeroById( id );
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' } )
     });

     test('getHeroById debe retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroById( id );
        expect(hero).toBeFalsy( );
     })
 })