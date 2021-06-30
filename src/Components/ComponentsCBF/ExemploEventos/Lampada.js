import React, {useState}from 'react'
import LampadaDesligada from './lamp_desligada.png'
import LampadaLigada from './lamp_ligada.png'

export default function Lampada(){

    const [ligado,setLigado] = useState(false);
    return(
        <>
            <img src = {ligado ? LampadaLigada: LampadaDesligada}></img>
            <button onClick={()=> setLigado(!ligado)}>{ligado ? 'Desligar': 'Ligar'}</button>
        </>
    )
}
