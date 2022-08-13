import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormCustomHook = () => {

    const formValues = 
        {
            username: '',
            email: '',
            password: ''
        }

    const { formState, onInputChange, onResetForm } = useForm(formValues)

    const { username, email, password } = formState
   
   
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
        <h1>Simple with custom hook</h1>

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

        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={ password }
            onChange= { onInputChange }
        />

        <button 
        className="btn btn-primary mt-2"
        onClick={ onResetForm }
        >
            Resset
        </button>


    </>
    )
}
