import React from 'react'

export default function Nota(props){

    return(
        <div>
            <legend>Infome a nota: {props.num}</legend>   
            <input
                type = "text" 
                value = {props.nota}
                name={props.nome}
                onChange = {(e)=>props.setNota(e)}> 
            </input>
        </div>
    )
}