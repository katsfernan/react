import { React, useState } from 'react'
import { AddCategories, GifGrid } from './components';


export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'Call Of Duty' ]);

const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    setCategories([onNewCategory,...categories])
}

return (
    <>
        {/* Titulo */}
        <h1>Gif expert app</h1>

        {/* Input */}
        <AddCategories
        // categories = { categories }
        // setCategories = { setCategories }
            onNewCategory = { value => onAddCategory(value)}

        />

        {/* Listado de Gif */}

            {
                categories.map( category => (
                    <GifGrid 
                        key = { category }
                        category={ category }
                    />)
                )
            }
        
        {/* Gif Item */}
    </>
    )
}
