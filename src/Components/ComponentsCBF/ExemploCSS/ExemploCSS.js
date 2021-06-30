import React from 'react'
import "./ExemploCSS.css"

export default function ExemploCSS(){
  const textoDestaque = {
            color:'#00f',
            fontSize:"3em"
        }
    return(
      
      <>
       <h1 style={{color:'#f00', fontSize:'2em'}}>Usando CSS inline</h1>
       <p style={textoDestaque}>Curso de React</p>
       <p className='texto'>CariocaJr classe</p>
       </> 
    )
}