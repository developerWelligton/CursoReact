import React, { useState } from 'react'
import NumeroState from './NumeroState/NumeroState'

export default function ExemploState(){
    //variavel e função que muda o estado dela
    const [num,setNum] = useState(10)
    const [nome,setNome] = useState('Welligton');
    //uso do state
    

  
    return(
        <>
        <p>Valor do state num: {num}</p>
         <NumeroState num={num} setNum={setNum}></NumeroState> 
        <p>{nome}</p> 
        </>
    )
}