import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const AddCategories = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if (newInputValue <= 1) return;

        // setCategories([...categories, inputValue])
        onNewCategory( newInputValue );
        setInputValue('');
    }

    return (
    <form onSubmit={ onSubmit } aria-label= "form">
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
        <button type='submit'>Agregar categoria</button>
    </form>

  )
}

AddCategories.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
