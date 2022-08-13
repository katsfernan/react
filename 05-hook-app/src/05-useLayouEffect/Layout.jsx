// import { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect, useRef } from "react";
import { Quote } from "../03-examples/Quote";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {

    const baseUrl = 'https://www.breakingbadapi.com/api/'
    const id = 1;
    
    const { counter, increment } = useCounter( id )
    
    const quotesById = `${baseUrl}quotes/${ counter }`;
    const { data, isLoading, errors } = useFetch( quotesById)
    const { author, quote } = !!data && data[0];
    
    return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr/>

        {
            isLoading
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                
                : 
                    <Quote author={ author } quote={ quote} />

            
                  

        }

        <button 
            onClick={ () => increment(1) }
            className="btn btn-primary"
        >
            Next quote
        </button>

    </>
  )
}
