import React from 'react'

export default function TrabalhandoComLista(){

    const carros = ['HRV','Golf','Focus','Cruze','Opala']

    const listaCarros=carros.map(
        (c,i)=>
            <li key={i}> {i}-{c}</li> 
    )

    return(
        <>
            <ul>{listaCarros}</ul>
        </>
    );
}