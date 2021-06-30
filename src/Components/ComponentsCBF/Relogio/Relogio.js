import React from 'react'

export default function Relogio(){
    const relogioCss = {
        fontSize: '5em'
    }

    return(
        <p style={relogioCss}>
              { new Date().toLocaleTimeString() }
        </p>
    )
}