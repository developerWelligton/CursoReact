import React from "react"

export default function TrabalhandoComLista2(){

    const pessoa = [
        {"name":"John", "age":45, "car":true},
        {"name":"Welligton", "age":24, "car":true},
        {"name":"Lucas", "age":18, "car":null},
        {"name":"Gabriel", "age":12, "car":null},
        {"name":"José", "age":58, "car":true},
    ];

    const listarPessoa = pessoa.map(
        (pessoa,i)=>
                <li key={i}>   {pessoa.name} - {pessoa.age}  - {pessoa.car}   </li>

    )



    return(
        <>
            <ul>{listarPessoa}</ul>
        </>
    )
}