import React, {useState}from 'react'

export default function ManipularFormulario2(){

    const [carro,setCarro] = useState('HRV')



    return(<>
        <label> Selecione um Carro</label>
         
         <select 
         value={carro} 
         onChange={(e)=>setCarro(e.target.value)}>
            <option value="HRV">HRV</option>
            <option value="Fusca">Fusca</option>
            <option value="CAMARO">CAMARO</option>
            <option value="Ferrari">Ferrari</option>
         </select>
         
        <p>Carro selecionado: {carro} </p>
    </>
    );
}