import React ,{useEffect, useState} from 'react'

export default function HookUseEffect(){

    const [contagem,setContagem]=useState(0)
    
    useEffect(
        ()=>console.log("Página Carregada"),
        document.title='Contagem:'+contagem
    )


    return(
        <>
            <p>Contagem:{contagem}</p>
            <button onClick={()=>setContagem(contagem+1)}> Contagem </button>
 
        </>
    )
}