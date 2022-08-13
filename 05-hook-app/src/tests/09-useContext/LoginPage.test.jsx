const { screen, render, fireEvent } = require("@testing-library/react");
const { UserContext } = require("../../09-useContext/context/UserContext");
const { LoginPage } = require("../../09-useContext/LoginPage");


describe('Pruebas en <LoginPage/>', () => { 

    test('Debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value= {{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('Debe de llamar la funcion setUser', () => {
       
    const setUserMock = jest.fn();

        render(
            <UserContext.Provider value= {{ user: null, setUser: setUserMock}} >
                <LoginPage/>
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect( setUserMock).toHaveBeenCalledWith({"email": "test@gmail.com", "id": 123, "username": "test"});

        // screen.debug();
    
        
    });
})