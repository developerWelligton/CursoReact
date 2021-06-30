import React from 'react'

export default function NumeroState(props){
    
    return(
        <>  
        <button onClick = {()=> props.setNum(props.num+10)}>Click Soma 10</button> 
        </>
    )
}