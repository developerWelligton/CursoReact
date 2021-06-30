import React from 'react'
import Caixa from './Caixa/Caixa'
import Canal from './Canal/Canal'

export default function Contencao(){

    return(
        <>
        <Caixa site="www.cfbcursos.com.br">
            <Canal></Canal>
            <p>Curso de react</p>
        </Caixa>
        </>
    )
}