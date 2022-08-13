import { useEffect } from "react";
import { useState } from "react"
import { MessageApp } from "./MessageApp";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'fernando',
        email: 'fmartinezr195@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // Cuando el segundo argumento es un array vacio,
    // el useEffect se ejecutara cuando se monta el elemento completo
    useEffect(() => {
        // console.log('useeffect trigered')
    }, []);

// Esta vez, se ejecutara cuando haya un cambio en el Formulario
    useEffect(() => {
        // console.log('formState changed')
    }, [formState]);

// Esta vez, se ejecutara cuando haya un cambio en el email
    useEffect(() => {
        // console.log('email changed')
    }, [email]);
    

  return (
    <>
        <h1>Simple form</h1>

        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value= { username }
            onChange= { onInputChange }
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="Email"
            name="email"
            value={ email }
            onChange= { onInputChange }
        />

        {
            (username == 'fernando2') && <MessageApp/>

        }

    </>
    )
}
